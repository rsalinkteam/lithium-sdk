/**
 * Created by nikhil.modak on 5/13/15.
 */

module.exports = {
  run: function () {
    require('../../lib/spawn-gulp')(['plugin', '--skip-upload']);
  },
  help: 'Packages and validates the plugin locally. ' +
    '\nRun this command from the root directory of a project.'
};