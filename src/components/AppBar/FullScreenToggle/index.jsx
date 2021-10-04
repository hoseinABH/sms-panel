import { useLayoutEffect, useEffect, useState } from 'react';

// components
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';

// icons
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import FullscreenExitIcon from '@material-ui/icons/FullscreenExit';

const useEnhancedEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

const FullScreenToggle = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEnhancedEffect(() => {
    document.onfullscreenchange = () =>
      setIsFullScreen(document[getBrowserFullscreenElementProp()] != null);

    return () => {
      document.onfullscreenchange = undefined;
    };
  });

  function getBrowserFullscreenElementProp() {
    if (typeof document.fullscreenElement !== 'undefined') {
      return 'fullscreenElement';
    }
    if (typeof document.mozFullScreenElement !== 'undefined') {
      return 'mozFullScreenElement';
    }
    if (typeof document.msFullscreenElement !== 'undefined') {
      return 'msFullscreenElement';
    }
    if (typeof document.webkitFullscreenElement !== 'undefined') {
      return 'webkitFullscreenElement';
    }
    throw new Error('fullscreenElement is not supported by this browser');
  }

  /* View in fullscreen */
  function openFullscreen() {
    const elem = document.documentElement;

    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      /* Firefox */
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      /* IE/Edge */
      elem.msRequestFullscreen();
    }
  }

  /* Close fullscreen */
  function closeFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      /* Firefox */
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      /* Chrome, Safari and Opera */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      /* IE/Edge */
      document.msExitFullscreen();
    }
  }

  function toggleFullScreen() {
    if (
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.mozFullScreenElement
    ) {
      closeFullscreen();
    } else {
      openFullscreen();
    }
  }

  return (
    <Tooltip title="تمام صفحه" placement="bottom">
      <IconButton onClick={toggleFullScreen}>
        {isFullScreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
      </IconButton>
    </Tooltip>
  );
};

export default FullScreenToggle;
