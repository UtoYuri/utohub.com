import * as React from 'react';
import * as frontMatter from 'front-matter';
import * as MarkdownIt from 'markdown-it';
import { Skeleton, Tag, Icon } from 'antd';
import 'antd/lib/skeleton/style/css';
import 'antd/lib/tag/style/css';
import 'antd/lib/icon/style/css';

import styles from './Project.less';
import Layout from "../../containers/CommonLayout/CommonLayout";
import * as qs from "query-string";

interface IState {
  markdownLoading: boolean;
  markdownLoaded: boolean;
  markdownMeta: any;
  markdownContent: string;
}

class Project extends React.Component<{}, IState> {

  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {
      markdownLoading: true,
      markdownLoaded: false,
      markdownMeta: {},
      markdownContent: '',
    };
  }


  async componentDidMount(): Promise<void> {
    const query = qs.parse(location.search);
    let projectName = query.name;
    if (typeof projectName !== 'string') {
      projectName = 'empty';
    }
    const markdown = await this.fetchMarkdown(projectName);
    if (!markdown) {
      return;
    }
    const markdownIt = new MarkdownIt();
    const formatted = frontMatter(markdown);
    const meta = formatted.attributes as any;
    if (meta.title) {
      this.setState({
        markdownLoading: false,
        markdownLoaded: true,
        markdownMeta: meta,
        markdownContent: markdownIt.render(formatted.body),
      });
    } else {
      const emptyContent = `\
## 关于
闲暇之余，挥霍光阴。

#### 作者
@yuri.zhu
      `;
      this.setState({
        markdownLoading: false,
        markdownLoaded: false,
        markdownMeta: meta,
        markdownContent: markdownIt.render(emptyContent),
      });
    }
  }

  fetchMarkdown = async (projectName: string) => {
    return await fetch(`https://io.utohub.com/utohub/${ projectName }/README.md`)
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
                  : <div className={ styles.metaContent }><span className={styles.emptyTip}>Project Not Found!</span></div> }
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