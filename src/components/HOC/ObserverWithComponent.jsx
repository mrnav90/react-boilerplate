import { observer } from 'mobx-react';
import { observable, extendObservable } from 'mobx';

export default observableProps => WrappedComponent => (props, context) => {
  const instance = observer(new WrappedComponent(props, context));
  const keys = Object.keys(observableProps);
  keys.forEach((key) => {
    extendObservable(instance, {
      [key]: observable,
    });
    instance[key] = key in props ? props[key] : observableProps[key];
  });
  return instance;
};
