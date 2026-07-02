import React from 'react';
import { CtaBanner } from './CtaBanner';

export function ProductCtaSection() {
  return (
    <CtaBanner
      title="Your next deliverable starts here."
      description="Free to start. No credit card. No onboarding required."
      primaryLabel="Start for Free"
      primaryHref="https://app.associum.ai/signup"
      secondaryLabel="See Pricing"
      secondaryHref="/pricing"
      footnote="No credit card required"
      meta="From zero to done · One step from sign-off · SOC 2 & ISO 27001 certified"
    />
  );
}
