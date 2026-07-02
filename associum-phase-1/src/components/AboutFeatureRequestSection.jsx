import React from 'react';
import { CtaBanner } from './CtaBanner';

export function AboutFeatureRequestSection() {
  return (
    <CtaBanner
      title={
        <>
          Built around the work you do.
          <br />
          Tell us what's next.
        </>
      }
      description={
        <>
          Associum grows with the workflows professionals bring to it.
          <br />
          If there's a task, report, or use case we should support, we want to hear it.
        </>
      }
      primaryLabel="Send a Feature Request"
      primaryHref="/contact"
      primaryVariant="primary"
    />
  );
}
