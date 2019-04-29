import { BuildInfo } from './build-info';

export const environment = {
  production: true,
  segment: {
    writeKey: '6hFmeOfdLCTWqyoU6JBEJ01ytIiyPPgm',
    options: {
      integrations: {
        All: true
      }
    }
  },
  rollbar: {
    accessToken: 'bcbcced242ca43a9b9e8c3cbce7f32d4',
    enabled: true,
    captureUncaught: true,
    captureUnhandledRejections: true,
    environment: 'production',
    codeVersion: BuildInfo.gitCommitHash
  }
};
