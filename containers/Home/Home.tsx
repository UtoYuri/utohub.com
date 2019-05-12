import Link from 'next/link';
import * as React from 'react';
import { Avatar, Drawer, Icon, List } from 'antd';

import styles from './Home.less';

interface IProjectMeta {
  name: string;
  title: string;
  tags?: string[];
  logoUrl?: string | null;
  description?: string;
}

interface IState {
  projectsVisible: boolean;
  projects: IProjectMeta[];
}

class Home extends React.Component<{}, IState> {

  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {
      projectsVisible: false,

      projects: [],
    };
  }

  async componentDidMount(): Promise<void> {
    const projects = await this.fetchProjects();
    this.setState({
      projects,
    });
  }

  fetchProjects = async () => {
    return await fetch('https://io.utohub.com/utohub/home/data/projects.json')
      .then((response) => response.json())
      .catch(() => []);
  }

  toggleProjects = () => {
    this.setState({
      projectsVisible: !this.state.projectsVisible,
    });
  }

  renderProject = (project: IProjectMeta) => (
    <List.Item>
      <List.Item.Meta
        avatar={ project.logoUrl ? <Avatar src={ project.logoUrl } /> : null }
        title={ <Link href={ `/project/${ project.name }` }><a>{ project.title }</a></Link> }
        description={ project.description }
      />
    </List.Item>
  )

  render() {
    const { projectsVisible, projects } = this.state;
    return (
      <div className={ styles.container }>
        <div className={ styles.content }>
          <div className={ styles.banner }>
            <h1 className={ styles.title }>UTOHUB</h1>
            <p className={ styles.slogan }>创意 • 实用 • 共享 • 开源</p>
            <p className={ styles.description }>知道在哪儿，世界就变得像一张地图那么小；不知道在哪儿，世界才广阔。</p>
          </div>
          <div className={ styles.links }>
            <div className={ styles.link }>
              <a href='javascript:' onClick={ this.toggleProjects }>
                <Icon type='project' className={ styles.icon } />
              </a>
            </div>
            <div className={ styles.link }>
              <a href='https://github.com/UtoYuri' target='_blank'>
                <Icon type='github' className={ styles.icon } />
              </a>
            </div>
            <div className={ styles.link }>
              <a href='mailto:support@utohub.com'>
                <Icon type='mail' className={ styles.icon } />
              </a>
            </div>
          </div>
        </div>
        <Drawer
          title='Side Projects & Something Funny'
          placement='left'
          onClose={ this.toggleProjects }
          visible={ projectsVisible }
          className={ styles.projectsDrawer }
          width={ 320 }
        >
          <List
            itemLayout='horizontal'
            dataSource={ projects }
            renderItem={ (item) => this.renderProject(item) }
          />
        </Drawer>
      </div>
    );
  }
}

export default Home;
