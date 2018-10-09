import { CallToActionExampleModule } from './call-to-action-example.module';

describe('CallToActionExampleModule', () => {
  let callToActionExampleModule: CallToActionExampleModule;

  beforeEach(() => {
    callToActionExampleModule = new CallToActionExampleModule();
  });

  it('should create an instance', () => {
    expect(callToActionExampleModule).toBeTruthy();
  });
});
