import { InfoBlockExampleModule } from './info-block-example.module';

describe('InfoBlockExampleModule', () => {
  let infoBlockExampleModule: InfoBlockExampleModule;

  beforeEach(() => {
    infoBlockExampleModule = new InfoBlockExampleModule();
  });

  it('should create an instance', () => {
    expect(infoBlockExampleModule).toBeTruthy();
  });
});
