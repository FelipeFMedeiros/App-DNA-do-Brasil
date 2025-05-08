const Path = require("path");
const Webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const FileManagerPlugin = require("filemanager-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Handlebars = require("handlebars");

const opts = {
  rootDir: process.cwd(),
  devBuild: process.env.NODE_ENV !== "production"
};

module.exports = {
  // core directory
  entry: {
    'app': "./src/assets/js/app.js",
  },
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  devtool: process.env.NODE_ENV === "production" ? "source-map" : "inline-source-map",
  output: {
    path: Path.join(opts.rootDir, "dist"),
    pathinfo: opts.devBuild,
    filename: "assets/js/[name].js",
    chunkFilename: 'assets/js/[name].js',

  },
  performance: { hints: false },
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          ecma: 5
        }
      }),
      new CssMinimizerPlugin({})
    ],
    runtimeChunk: false
  },
  plugins: [
    // Extract css files to seperate bundle
    new MiniCssExtractPlugin({
      filename: "assets/css/app.css",
      chunkFilename: "assets/css/app.css"
    }),

    // Copy fonts and images to dist
    new CopyWebpackPlugin({
      patterns: [
        // images copy
        { from: "src/assets/img", to: "assets/img" },
        // page level scripts 
        { from: "src/assets/js/component", to: "assets/js/component" },
        { from: "src/assets/js/fitness", to: "assets/js/fitness" },
        // demo pages
        // { from: "src/pages", to: "" },
      ]
    }),

    new Webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),

    // blank
    new HtmlWebpackPlugin({ filename: "index.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/index.html", inject: true, minify: false, hash: true, title: "Blank Page" }),
    new HtmlWebpackPlugin({ filename: "fitness-splash.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/fitness-splash.html", inject: true, minify: false, hash: true, title: "Splash" }),

    //fitness
    new HtmlWebpackPlugin({ filename: "fitness-dashboard.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/fitness-dashboard.html", inject: true, minify: false, hash: true, title: "fitness Dashboard" }),
    new HtmlWebpackPlugin({ filename: "fitness-chat-and-call.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/fitness-chat-and-call.html", inject: true, minify: false, hash: true, title: "Chat & Call" }),
    new HtmlWebpackPlugin({ filename: "fitness-chat.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/fitness-chat.html", inject: true, minify: false, hash: true, title: "Chat" }),
    new HtmlWebpackPlugin({ filename: "fitness-referral.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/fitness-referral.html", inject: true, minify: false, hash: true, title: "Referral" }),
    new HtmlWebpackPlugin({ filename: "fitness-calendar.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/fitness-calendar.html", inject: true, minify: false, hash: true, title: "Calendar" }),
    new HtmlWebpackPlugin({ filename: "fitness-workout.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/fitness-workout.html", inject: true, minify: false, hash: true, title: "fitness Workout" }),
    new HtmlWebpackPlugin({ filename: "fitness-workout-details.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/fitness-workout-details.html", inject: true, minify: false, hash: true, title: "Workout Details" }),
    new HtmlWebpackPlugin({ filename: "fitness-club-all.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/fitness-club-all.html", inject: true, minify: false, hash: true, title: "Clubs" }),
    new HtmlWebpackPlugin({ filename: "fitness-club.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/fitness-club.html", inject: true, minify: false, hash: true, title: "Fitness Club" }),
    new HtmlWebpackPlugin({ filename: "fitness-club-trainers.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/fitness-club-trainers.html", inject: true, minify: false, hash: true, title: "Club Trainers" }),
    new HtmlWebpackPlugin({ filename: "fitness-club-trainer-details.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/fitness-club-trainer-details.html", inject: true, minify: false, hash: true, title: "Trainer Details" }),
    new HtmlWebpackPlugin({ filename: "fitness-diet.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/fitness-diet.html", inject: true, minify: false, hash: true, title: "fitness Diet" }),
    new HtmlWebpackPlugin({ filename: "fitness-diet-all.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/fitness-diet-all.html", inject: true, minify: false, hash: true, title: "All Diet Plans" }),
    new HtmlWebpackPlugin({ filename: "fitness-diet-details.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/fitness-diet-details.html", inject: true, minify: false, hash: true, title: "Diet details" }),
    new HtmlWebpackPlugin({ filename: "fitness-diet-add-meal.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/fitness-diet-add-meal.html", inject: true, minify: false, hash: true, title: "Add Meal" }),
    new HtmlWebpackPlugin({ filename: "fitness-report.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/fitness-report.html", inject: true, minify: false, hash: true, title: "Fitness Report" }),
    new HtmlWebpackPlugin({ filename: "fitness-personalization.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/fitness-personalization.html", inject: true, minify: false, hash: true, title: "fitness personalization" }),

    new HtmlWebpackPlugin({ filename: "fitness-login.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/fitness-login.html", inject: true, minify: false, hash: true, title: "Fitness Login" }),
    new HtmlWebpackPlugin({ filename: "fitness-signup.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/fitness-signup.html", inject: true, minify: false, hash: true, title: "Fitness Signup" }),
    new HtmlWebpackPlugin({ filename: "fitness-signup-success.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/fitness-signup-success.html", inject: true, minify: false, hash: true, title: "Fitness Signup Success" }),
    new HtmlWebpackPlugin({ filename: "fitness-forgot-password.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/fitness-forgot-password.html", inject: true, minify: false, hash: true, title: "Fitness Forgot Password" }),
    new HtmlWebpackPlugin({ filename: "fitness-change-password.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/fitness-change-password.html", inject: true, minify: false, hash: true, title: "Fitness Change Password" }),
    new HtmlWebpackPlugin({ filename: "fitness-onboarding.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/fitness-onboarding.html", inject: true, minify: false, hash: true, title: "Onboarding" }),
    new HtmlWebpackPlugin({ filename: "fitness-profile-kyc.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/fitness-profile-kyc.html", inject: true, minify: false, hash: true, title: "Profile KYC 1" }),
    new HtmlWebpackPlugin({ filename: "fitness-profile-kyc-2.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/fitness-profile-kyc-2.html", inject: true, minify: false, hash: true, title: "Profile KYC 2" }),
    new HtmlWebpackPlugin({ filename: "fitness-profile-kyc-start.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/fitness-profile-kyc-start.html", inject: true, minify: false, hash: true, title: "Fitness profile-kyc-start" }),
    new HtmlWebpackPlugin({ filename: "fitness-profile.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/fitness-profile.html", inject: true, minify: false, hash: true, title: "Profile" }),
    new HtmlWebpackPlugin({ filename: "fitness-earning.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/fitness-earning.html", inject: true, minify: false, hash: true, title: "Earning" }),
    new HtmlWebpackPlugin({ filename: "fitness-subscription.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/fitness-subscription.html", inject: true, minify: false, hash: true, title: "Subscription" }),
    new HtmlWebpackPlugin({ filename: "fitness-subscription-upgrade.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/fitness-subscription-upgrade.html", inject: true, minify: false, hash: true, title: "Upgrade Plan" }),
    new HtmlWebpackPlugin({ filename: "fitness-subscription-pay.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/fitness-subscription-pay.html", inject: true, minify: false, hash: true, title: "Plan Payment" }),
    new HtmlWebpackPlugin({ filename: "fitness-settings.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/fitness-settings.html", inject: true, minify: false, hash: true, title: "Settings" }),
    new HtmlWebpackPlugin({ filename: "fitness-blog.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/fitness-blog.html", inject: true, minify: false, hash: true, title: "Blog" }),
    new HtmlWebpackPlugin({ filename: "fitness-blog-details.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/fitness-blog-details.html", inject: true, minify: false, hash: true, title: "Blog Details" }),
    new HtmlWebpackPlugin({ filename: "fitness-aboutus.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/fitness-aboutus.html", inject: true, minify: false, hash: true, title: "About Us" }),
    new HtmlWebpackPlugin({ filename: "fitness-contactus.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/fitness-contactus.html", inject: true, minify: false, hash: true, title: "Contact Us" }),
    new HtmlWebpackPlugin({ filename: "fitness-terms-of-use.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/fitness-terms-of-use.html", inject: true, minify: false, hash: true, title: "Fitness terms of use" }),
    new HtmlWebpackPlugin({ filename: "fitness-privacy-policy.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/fitness-privacy-policy.html", inject: true, minify: false, hash: true, title: "Fitness privacy policy" }),
    new HtmlWebpackPlugin({ filename: "fitness-pages.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/fitness-pages.html", inject: true, minify: false, hash: true, title: "All Pages" }),
    new HtmlWebpackPlugin({ filename: "page-not-found.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/page-not-found.html", inject: true, minify: false, hash: true, title: "Page not found" }),
    new HtmlWebpackPlugin({ filename: "page-not-found-2.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/page-not-found-2.html", inject: true, minify: false, hash: true, title: "Page not found 2" }),
    new HtmlWebpackPlugin({ filename: "page-not-found-3.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/page-not-found-3.html", inject: true, minify: false, hash: true, title: "Page not found 3" }),
    new HtmlWebpackPlugin({ filename: "under-construction.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/under-construction.html", inject: true, minify: false, hash: true, title: "Under Construction" }),
    new HtmlWebpackPlugin({ filename: "coming-soon.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/coming-soon.html", inject: true, minify: false, hash: true, title: "Coming Soon..." }),

    //components
    new HtmlWebpackPlugin({ filename: "components.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/components.html", inject: true, minify: false, hash: true, title: "components" }),
    new HtmlWebpackPlugin({ filename: "component-accordions.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-accordions.html", inject: true, minify: false, hash: true, title: "component-accordions" }),
    new HtmlWebpackPlugin({ filename: "component-alerts.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-alerts.html", inject: true, minify: false, hash: true, title: "component-alerts" }),
    new HtmlWebpackPlugin({ filename: "component-avatar.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-avatar.html", inject: true, minify: false, hash: true, title: "component-avatar" }),
    new HtmlWebpackPlugin({ filename: "component-badges.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-badges.html", inject: true, minify: false, hash: true, title: "component-badges" }),
    new HtmlWebpackPlugin({ filename: "component-bootstrap-icons.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-bootstrap-icons.html", inject: true, minify: false, hash: true, title: "component-bootstrap-icons" }),
    new HtmlWebpackPlugin({ filename: "component-bootstrap-icons.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-bootstrap-icons.html", inject: true, minify: false, hash: true, title: "component-bootstrap-icons" }),
    new HtmlWebpackPlugin({ filename: "component-breadcrumbs.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-breadcrumbs.html", inject: true, minify: false, hash: true, title: "component-breadcrumbs" }),
    new HtmlWebpackPlugin({ filename: "component-button-groups.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-button-groups.html", inject: true, minify: false, hash: true, title: "component-button-groups" }),
    new HtmlWebpackPlugin({ filename: "component-buttons.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-buttons.html", inject: true, minify: false, hash: true, title: "component-buttons" }),
    new HtmlWebpackPlugin({ filename: "component-cards.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-cards.html", inject: true, minify: false, hash: true, title: "component-cards" }),
    new HtmlWebpackPlugin({ filename: "component-chartjs.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-chartjs.html", inject: true, minify: false, hash: true, title: "component-chartjs" }),
    new HtmlWebpackPlugin({ filename: "component-checkboxes.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-checkboxes.html", inject: true, minify: false, hash: true, title: "component-checkboxes" }),
    new HtmlWebpackPlugin({ filename: "component-collapse.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-collapse.html", inject: true, minify: false, hash: true, title: "component-collapse" }),
    new HtmlWebpackPlugin({ filename: "component-colors.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-colors.html", inject: true, minify: false, hash: true, title: "component-colors" }),
    new HtmlWebpackPlugin({ filename: "component-datatable.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-datatable.html", inject: true, minify: false, hash: true, title: "component-datatable" }),
    new HtmlWebpackPlugin({ filename: "component-daterangepicker.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-daterangepicker.html", inject: true, minify: false, hash: true, title: "component-daterangepicker" }),
    new HtmlWebpackPlugin({ filename: "component-dragula.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-dragula.html", inject: true, minify: false, hash: true, title: "component-dragula" }),
    new HtmlWebpackPlugin({ filename: "component-dropdowns.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-dropdowns.html", inject: true, minify: false, hash: true, title: "component-dropdowns" }),
    new HtmlWebpackPlugin({ filename: "component-dropzone.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-dropzone.html", inject: true, minify: false, hash: true, title: "component-dropzone" }),
    new HtmlWebpackPlugin({ filename: "component-feather-icons.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-feather-icons.html", inject: true, minify: false, hash: true, title: "component-feather-icons" }),
    new HtmlWebpackPlugin({ filename: "component-floating-label.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-floating-label.html", inject: true, minify: false, hash: true, title: "component-floating-label" }),
    new HtmlWebpackPlugin({ filename: "component-full-calendar.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-full-calendar.html", inject: true, minify: false, hash: true, title: "component-full-calendar" }),
    new HtmlWebpackPlugin({ filename: "component-header.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-header.html", inject: true, minify: false, hash: true, title: "component-header" }),
    new HtmlWebpackPlugin({ filename: "component-heights-widths.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-heights-widths.html", inject: true, minify: false, hash: true, title: "component-heights-widths" }),
    new HtmlWebpackPlugin({ filename: "component-icon-buttons.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-icon-buttons.html", inject: true, minify: false, hash: true, title: "component-icon-buttons" }),
    new HtmlWebpackPlugin({ filename: "component-input-groups.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-input-groups.html", inject: true, minify: false, hash: true, title: "component-input-groups" }),
    new HtmlWebpackPlugin({ filename: "component-inputs.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-inputs.html", inject: true, minify: false, hash: true, title: "component-inputs" }),
    new HtmlWebpackPlugin({ filename: "component-list-groups.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-list-groups.html", inject: true, minify: false, hash: true, title: "component-list-groups" }),
    new HtmlWebpackPlugin({ filename: "component-margin-padding.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-margin-padding.html", inject: true, minify: false, hash: true, title: "component-margin-padding" }),
    new HtmlWebpackPlugin({ filename: "component-modal-dialogues.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-modal-dialogues.html", inject: true, minify: false, hash: true, title: "component-modal-dialogues" }),
    new HtmlWebpackPlugin({ filename: "component-nav.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-nav.html", inject: true, minify: false, hash: true, title: "component-nav" }),
    new HtmlWebpackPlugin({ filename: "component-off-canvas.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-off-canvas.html", inject: true, minify: false, hash: true, title: "component-off-canvas" }),
    new HtmlWebpackPlugin({ filename: "component-pagination.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-pagination.html", inject: true, minify: false, hash: true, title: "component-pagination" }),
    new HtmlWebpackPlugin({ filename: "component-popovers.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-popovers.html", inject: true, minify: false, hash: true, title: "component-popovers" }),
    new HtmlWebpackPlugin({ filename: "component-pricing.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-pricing.html", inject: true, minify: false, hash: true, title: "component-pricing" }),
    new HtmlWebpackPlugin({ filename: "component-progress.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-progress.html", inject: true, minify: false, hash: true, title: "component-progress" }),
    new HtmlWebpackPlugin({ filename: "component-progressbar-js.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-progressbar-js.html", inject: true, minify: false, hash: true, title: "component-progressbar-js" }),
    new HtmlWebpackPlugin({ filename: "component-radios.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-radios.html", inject: true, minify: false, hash: true, title: "component-radios" }),
    new HtmlWebpackPlugin({ filename: "component-riskometer.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-riskometer.html", inject: true, minify: false, hash: true, title: "component-riskometer" }),
    new HtmlWebpackPlugin({ filename: "component-scrollspy.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-scrollspy.html", inject: true, minify: false, hash: true, title: "component-scrollspy" }),
    new HtmlWebpackPlugin({ filename: "component-selects.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-selects.html", inject: true, minify: false, hash: true, title: "component-selects" }),
    new HtmlWebpackPlugin({ filename: "component-sidebars.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-sidebars.html", inject: true, minify: false, hash: true, title: "component-sidebars" }),
    new HtmlWebpackPlugin({ filename: "component-sliders.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-sliders.html", inject: true, minify: false, hash: true, title: "component-sliders" }),
    new HtmlWebpackPlugin({ filename: "component-smartwizard.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-smartwizard.html", inject: true, minify: false, hash: true, title: "component-smartwizard" }),
    new HtmlWebpackPlugin({ filename: "component-spinners-loaders.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-spinners-loaders.html", inject: true, minify: false, hash: true, title: "component-spinners-loaders" }),
    new HtmlWebpackPlugin({ filename: "component-swiper-carousel.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-swiper-carousel.html", inject: true, minify: false, hash: true, title: "component-swiper-carousel" }),
    new HtmlWebpackPlugin({ filename: "component-switches.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-switches.html", inject: true, minify: false, hash: true, title: "component-switches" }),
    new HtmlWebpackPlugin({ filename: "component-tables.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-tables.html", inject: true, minify: false, hash: true, title: "component-tables" }),
    new HtmlWebpackPlugin({ filename: "component-tabs.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-tabs.html", inject: true, minify: false, hash: true, title: "component-tabs" }),
    new HtmlWebpackPlugin({ filename: "component-toasts.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-toasts.html", inject: true, minify: false, hash: true, title: "component-toasts" }),
    new HtmlWebpackPlugin({ filename: "component-tooltips.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-tooltips.html", inject: true, minify: false, hash: true, title: "component-tooltips" }),
    new HtmlWebpackPlugin({ filename: "component-validation.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-validation.html", inject: true, minify: false, hash: true, title: "component-validation" }),

    // documentation
    new HtmlWebpackPlugin({ filename: "documentation.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/documentation.html", inject: true, title: "Document" }),
  ],
  module: {
    rules: [
      // Babel-loader
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true
          }
        }
      },
      // Css-loader & sass-loader
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      },

      // Load fonts
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        type: "asset/resource",
        generator: {
          filename: "assets/fonts/[name][ext]"
        }
      },

      // Load images
      {
        test: /\.(png|jpg|jpeg|gif)(\?v=\d+\.\d+\.\d+)?$/,
        type: "asset/resource",
        generator: {
          filename: "assets/img/[name][ext]"
        }
      },

      {
        test: /\.html$/,
        exclude: /(node_modules)/,
        use: {
          loader: "html-loader",
          options: {
            sources: false,
            minimize: false
          }
        }
      },
    ]
  },
  resolve: {
    extensions: [".js", ".scss"],
    modules: ["node_modules"],
    alias: {
      request$: "xhr"
    }
  },
  devServer: {
    static: {
      directory: Path.join(__dirname, "dist")
    },
    port: 8080,
    open: true,
  }
};
