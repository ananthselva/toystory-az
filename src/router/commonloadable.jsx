import { Suspense } from 'react';

// component imports

const CommonLoadable = (Component) => (props) =>
  (
    <Suspense fallback={<div> </div>}>
      <Component {...props} />
    </Suspense>
  );

export default CommonLoadable;
