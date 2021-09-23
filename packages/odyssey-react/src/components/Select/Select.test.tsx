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

import { render, fireEvent, screen, within } from "@testing-library/react";
import Select from ".";

const listboxRole = "listbox";
const optionRole = "option";
const label = "Select speed";
const name = "speed";
const warpValue = "Warp speed";

const tree = (props: Record<string, unknown> = {}) => (
  <Select {...props} label={label} name={name}>
    <Select.Option children="Lightspeed" />
    <Select.Option children="Warp speed" />
    <Select.Option children="Ludicrous speed" />
  </Select>
);

const getSelectViaQuery = () =>
  window.document.querySelector("select") as HTMLSelectElement;

describe("Select", () => {
  it("renders hidden select UI into the document", () => {
    render(tree());

    const select = getSelectViaQuery();
    expect(select).toBeInTheDocument();
    expect(select).not.toBeVisible();
  });

  it("renders visible listbox UI into the document", () => {
    expect.assertions(4);
    render(tree());

    const listbox = screen.getAllByRole(listboxRole).pop() as HTMLDivElement;
    expect(listbox).toBeVisible();

    const options = within(listbox).getAllByRole(optionRole);
    options.forEach((option) => {
      expect(option).toBeVisible();
    });
  });

  it("renders controlled when provided with a value", () => {
    render(tree({ value: warpValue }));

    const select = getSelectViaQuery();
    expect(select).toHaveValue(warpValue);
  });

  it("renders uncontrolled when not provided with a value", () => {
    render(tree());

    const select = getSelectViaQuery();
    expect(select).toHaveValue(undefined);

    const listbox = screen.getAllByRole(listboxRole)[0];
    fireEvent.mouseDown(listbox);
    const option = screen.getByText(warpValue, {
      selector: `div[data-value="${warpValue}"]`,
    });
    fireEvent.mouseDown(option);

    expect(select).toHaveValue(warpValue);
  });

  it("renders hint text when provided", () => {
    const hint = "Time is relative";
    render(tree({ hint }));

    const hintElement = screen.getByText(hint);
    expect(hintElement).toBeVisible();
  });

  it("invokes ref with expected args after render", () => {
    const ref = jest.fn();

    render(tree({ ref }));

    const select = getSelectViaQuery();

    expect(ref).toHaveBeenCalledTimes(1);
    expect(ref).toHaveBeenLastCalledWith(select);
  });

  it("invokes onChange with expected args when change event fires", () => {
    const onChange = jest.fn();
    render(tree({ onChange }));

    const listbox = screen.getAllByRole(listboxRole)[0];
    fireEvent.mouseDown(listbox);
    const option = screen.getByText(warpValue, {
      selector: `div[data-value="${warpValue}"]`,
    });
    fireEvent.mouseDown(option);

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenLastCalledWith(
      expect.objectContaining({ type: "change" }),
      warpValue
    );
  });

  a11yCheck(() => render(tree()));
});
