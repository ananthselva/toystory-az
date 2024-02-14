import { Suspense } from 'react';

// component imports

const Loadable = (Component) => (props) =>
  (
    <Suspense fallback={<div></div>}>
      <Component {...props} />
    </Suspense>
  );

export default Loadable;
