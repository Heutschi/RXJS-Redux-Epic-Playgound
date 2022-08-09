/**
 * Expose server environment variable retrieved from global window entry
 */

export default {
    getDPMVersion: function () {
      return "UNKNOWN";
    },
    getServerEnv: function () {
        return this.LOCAL;
    },
    LOCAL: "local",
    DEVELOPMENT: "development",
    INTEGRATION: "integration",
    PRODUCTION: "production",

    getAppBarColor: function () {
        switch (this.getServerEnv()) {
            case this.DEVELOPMENT:
                return 'LightSteelBlue';
            case this.INTEGRATION:
                return 'LightSeaGreen';
            case this.PRODUCTION:
                return 'Cyan';
            case this.LOCAL:
            default:
                return 'Beige';
        }
    },
};