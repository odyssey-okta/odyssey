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

import React from "react";
import type { Story } from "@storybook/react";
import {
  Link,
  LinkProps,
  Icon,
  InformationCircleFilledIcon,
} from "../../../../odyssey-react/src";
import LinkMdx from "./Link.mdx";

export default {
  title: `Components/Link`,
  component: Link,
  parameters: {
    docs: {
      page: LinkMdx,
    },
  },
};

const Template: Story<LinkProps> = ({
  children,
  variant,
  href,
  target,
  rel,
  icon,
}) => {
  if (typeof icon === "string") {
    icon = <Icon name={icon} />;
  }
  return (
    <Link href={href} target={target} rel={rel} variant={variant} icon={icon}>
      {children}
    </Link>
  );
};

export const Default = Template.bind({});
Default.args = {
  href: "#anchor",
  children: "Anchor link",
};

export const Monochrome = Template.bind({});
Monochrome.args = {
  href: "#anchor",
  variant: "monochrome",
  children: "Monochrome link",
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  href: "#anchor",
  children: "Monochrome link",
  icon: <InformationCircleFilledIcon />,
};

export const External = Template.bind({});
External.args = {
  href: "https://www.okta.com",
  children: "Visit okta.com",
  rel: "noopener",
  target: "_blank",
};
