import * as React from 'react';
import * as qs from 'query-string';
import { Input } from 'antd';
import 'antd/lib/input/style/css';

import styles from './VideoPlayer.less';
import Layout from "../../containers/CommonLayout/CommonLayout";
import BackHomeLink from "../../components/BackHomeLink/BackHomeLink";

interface IState {
  src?: string;
}

class VideoPlayer extends React.Component<{}, IState> {
  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {
      src: undefined,
    };
  }

  componentDidMount(): void {
    const query = qs.parse(location.search);
    if (typeof query.src !== 'string') {
      return;
    }
    this.setState({ src: query.src });
  }

  changeVideo = (e: any) => {
    this.setState({ src: e.target.value });
  };

  render() {
    const { src } = this.state;
    const playerUrl = `https://onelineplayer.com/player.html?autoplay=false&autopause=false&muted=false&url=${ encodeURIComponent(src || '') }\
&poster=&time=true&progressBar=true&playButton=true&overlay=true&muteButton=true\
&fullscreenButton=true&style=light&logo=false&quality=1080`;
    return (
      <Layout>
        <div className={ styles.container }>
          <BackHomeLink className={ styles.backHome } />
          <Input
            size="large"
            placeholder="Source here..."
            className={ styles.srcInput }
            onPressEnter={ this.changeVideo }
          />
          <div className={ styles.playerContainer }>
            { src ? <iframe
              frameBorder="0"
              allowFullScreen
              scrolling="no"
              src={ playerUrl }
              className={ styles.player }
            /> : <div className={ styles.poster }>no source to play...</div> }
          </div>
        </div>
      </Layout>
    );
  }
}

export default VideoPlayer;