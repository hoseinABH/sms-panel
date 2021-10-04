import React from 'react';
import { VelocityTransitionGroup } from 'velocity-react';
import __ from 'lodash';

const _ = __.runInContext();

_.mixin({
  // Immutable Set for setting state
  setIn: (state, name, value) => {
    return _.setWith(_.clone(state), name, value, _.clone);
  },
});

const enterAnimationDefaults = {
  animation: 'transition.fadeIn',
  stagger: 50,
  duration: 200,
  display: null,
  visibility: 'visible',
  delay: 0,
};

const leaveAnimationDefaults = {
  stagger: 50,
  duration: 200,
  display: null,
  visibility: 'visible',
  delay: 0,
};

function AnimateGroup(props) {
  const newProps = _.merge(
    {},
    {
      enter: enterAnimationDefaults,
      leave: leaveAnimationDefaults,
    },
    props
  );

  return (
    <VelocityTransitionGroup {...newProps}>
      <div>{props.children}</div>
    </VelocityTransitionGroup>
  );
}

AnimateGroup.defaultProps = {
  enter: enterAnimationDefaults,
  leave: leaveAnimationDefaults,
  easing: [0.4, 0.0, 0.2, 1],
  runOnMount: true,
  enterHideStyle: {
    visibility: 'visible',
  },
  enterShowStyle: {
    visibility: 'hidden',
  },
};

export default React.memo(AnimateGroup);
