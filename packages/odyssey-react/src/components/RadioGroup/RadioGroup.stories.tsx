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

import type { Story } from "@storybook/react";
import React from "react";
import RadioGroup from ".";
import Radio from "../Radio";
import type { Props } from ".";

export default {
  title: `Components/RadioGroup`,
  component: RadioGroup,
  args: {
    legend: 'Select speed',
    name: 'speed',
  },
  argTypes: {
    aside: { control: 'text' },
    legend: { control: 'text' },
    required: { control: 'boolean' },
    disabled: { control: 'boolean' },
    value: { control: 'text' },
    name: { control: 'text' },
    onChange: { control: false },
    onBlur: { control: false },
    onFocus: { control: false }
  },
};

const Template: Story<Props> = (args) => (
  <RadioGroup { ...args } >
    <Radio label="Lightspeed" value="light" />
    <Radio label="Warp speed" value="warp" />
    <Radio label="Ludicrous speed" value="ludicrous" />
  </RadioGroup>
);

export const Default = Template.bind({});
Default.args = {
  value: "warp"
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true
};

export const Invalid = Template.bind({});