import * as React from 'react';
import * as frontMatter from 'front-matter';
import * as MarkdownIt from 'markdown-it';
import { Skeleton, Tag, Icon } from 'antd';

import styles from './Project.less';
import BackHomeLink from '../../components/BackHomeLink/BackHomeLink';

interface IProps {
  projectName: string;
}

interface IState {
  markdownLoading: boolean;
  markdownLoaded: boolean;
  markdownMeta: any;
  markdownContent: string;
}

class Project extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      markdownLoading: true,
      markdownLoaded: false,
      markdownMeta: {},
      markdownContent: '',
    };
  }

  async componentDidMount(): Promise<void> {
    const { projectName } = this.props;
    let markdownLoaded = false;
    let meta = {} as any;
    let markdownContent = `\
## 关于
闲暇之余，挥霍光阴。

#### 作者
@yuri.zhu
      `;
    const markdown = await this.fetchMarkdown(projectName);
    const markdownIt = new MarkdownIt();
    if (markdown) {
      const formatted = frontMatter(markdown);
      meta = formatted.attributes;
      if (meta.title) {
        markdownLoaded = true;
        markdownContent = formatted.body;
      }
    }
    this.setState({
      markdownLoading: false,
      markdownLoaded,
      markdownMeta: meta,
      markdownContent: markdownIt.render(markdownContent),
    });
    document.title = `${ meta.title } - UTOHUB - Gee乐世界`;
  }

  fetchMarkdown = async (projectName: string) => {
    return await fetch(`https://io.utohub.com/utohub/home/data/${ projectName }/README.md`)
      .then((response) => response.text())
      .catch(() => {
        return null;
      });
  }

  render() {
    const { markdownLoading, markdownLoaded, markdownMeta, markdownContent } = this.state;
    return (
      <div className={ styles.container }>
        <div className={ styles.content }>
          <div className={ styles.meta }>
            <BackHomeLink />
            <Skeleton
              className={ styles.metaContent }
              active
              loading={ markdownLoading }>
              { markdownLoaded ?
                <div className={ styles.metaContent }>
                  <div className={ styles.left }>
                    <h1>{ markdownMeta.title }</h1>
                    <p>{ markdownMeta.description }</p>
                    <div style={ { display: 'block' } }>
                      { markdownMeta.tags && Array.isArray(markdownMeta.tags) ? markdownMeta.tags.map((tag: string) => (
                        <Tag key={ tag }>{ tag }</Tag>)) : null }
                    </div>
                    <div className={ styles.links }>
                      { markdownMeta.github ?
                        <div className={ styles.link }>
                          <Icon type='github' />
                          <a href={ markdownMeta.github } target='_blank'>Github</a>
                        </div> : null }
                      { markdownMeta.link ?
                        <div className={ styles.link }>
                          <a href={ markdownMeta.link } target='_blank'>在线预览</a>
                        </div> : null }
                    </div>
                  </div>
                  <div className={ styles.right }>
                    { markdownMeta.cover ? <img src={ markdownMeta.cover } alt='cover' /> : null }
                  </div>
                </div>
                : <div className={ styles.metaContent }><span className={ styles.emptyTip }>Project Not Found!</span>
                </div> }
            </Skeleton>
          </div>
          <Skeleton
            className={ styles.markdown }
            active
            paragraph={ { rows: 10 } }
            loading={ markdownLoading }>
            <div className={ styles.markdown } dangerouslySetInnerHTML={ { __html: markdownContent } } />
          </Skeleton>
        </div>
      </div>
    );
  }
}

export default Project;
