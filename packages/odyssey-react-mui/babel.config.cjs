/*!
 * Copyright (c) 2021-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */

module.exports = {
  presets: [
    [
      "@okta/odyssey-babel-preset",
      {
        odyssey: false,
        react: {
          runtime: "classic",
        },
      },
    ],
  ],

  plugins: [
    [
      "babel-plugin-import",
      {
        libraryName: "@mui/material",
        libraryDirectory: "",
        camel2DashComponentName: false,
      },
      "core",
    ],
    [
      "babel-plugin-import",
      {
        libraryName: "@mui/icons-material",
        libraryDirectory: "",
        camel2DashComponentName: false,
      },
      "icons",
    ],
  ],

  env: {
    production: {
      plugins: [
        "@okta/fully-specified",
        [
          "babel-plugin-import",
          {
            libraryName: "@mui/material",
            libraryDirectory: "",
            camel2DashComponentName: false,
          },
          "core",
        ],
        [
          "babel-plugin-import",
          {
            libraryName: "@mui/icons-material",
            libraryDirectory: "",
            camel2DashComponentName: false,
          },
          "icons",
        ],
      ],
      presets: [
        [
          "@okta/odyssey-babel-preset",
          {
            odyssey: false,
            env: {
              modules: false,
            },
            react: {
              runtime: "classic",
            },
          },
        ],
      ],
      comments: false,
      shouldPrintComment: (val) => {
        return /Okta, Inc\.|@license|@preserve/.test(val);
      },
      ignore: [/\.test\.|\.stories\./i],
    },
  },
};
