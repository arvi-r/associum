module.exports = {
  hooks: {
    readPackage(pkg) {
      if (pkg.dependencies && pkg.dependencies.zod) {
        pkg.dependencies.zod = '3.23.8';
      }
      if (pkg.devDependencies && pkg.devDependencies.zod) {
        pkg.devDependencies.zod = '3.23.8';
      }
      if (pkg.peerDependencies && pkg.peerDependencies.zod) {
        pkg.peerDependencies.zod = '3.23.8';
      }
      return pkg;
    }
  }
};
