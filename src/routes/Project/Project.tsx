import * as React from 'react';
import * as frontMatter from 'front-matter';
import * as MarkdownIt from 'markdown-it';
import { Skeleton, Tag, Icon } from 'antd';
import 'antd/lib/skeleton/style/css';
import 'antd/lib/tag/style/css';
import 'antd/lib/icon/style/css';

import styles from './Project.less';
import Layout from "../../containers/CommonLayout/CommonLayout";

interface IState {
  markdownLoading: boolean;
  markdownLoaded: boolean;
  markdownMeta: any;
  markdownContent: string;
}

interface IProps {
  match: {
    params: {
      name: string;
    };
  }
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
    const { match: { params } } = this.props;
    let projectName = params.name;
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
      markdownLoaded: markdownLoaded,
      markdownMeta: meta,
      markdownContent: markdownIt.render(markdownContent),
    });
  }

  fetchMarkdown = async (projectName: string) => {
    return await fetch(`https://io.utohub.com/utohub/home/data/${ projectName }/README.md`)
      .then(response => response.text())
      .catch(() => {
        return null;
      })
  };

  render() {
    const { markdownLoading, markdownLoaded, markdownMeta, markdownContent } = this.state;
    return (
      <Layout>
        <div className={ styles.container }>
          <div className={ styles.content }>
            <div className={ styles.meta }>
              <a href="/" className={ styles.backHome }>返回</a>
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
                        { markdownMeta.tags ? markdownMeta.tags.split(',').map((tag: string) => (
                          <Tag key={ tag }>{ tag }</Tag>)) : null }
                      </div>
                      <div className={ styles.links }>
                        { markdownMeta.github ?
                          <div className={ styles.link }>
                            <Icon type="github" />
                            <a href={ markdownMeta.github } target="_blank">Github</a>
                          </div> : null }
                        { markdownMeta.link ?
                          <div className={ styles.link }>
                            <a href={ markdownMeta.link } target="_blank">在线预览</a>
                          </div> : null }
                      </div>
                    </div>
                    <div className={ styles.right }>
                      { markdownMeta.qrcode ? <img src={ markdownMeta.qrcode } /> : null }
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
      </Layout>
    );
  }
}

export default Project;