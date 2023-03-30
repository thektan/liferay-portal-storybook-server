import React from "react";

import InputSets, {
	useInputSets,
} from "src/main/resources/META-INF/resources/js/shared/input_sets/index";
import {SearchBarWidgetConfigurationDecorator} from "../decorators";
import ClayButton from "@clayui/button";
import {ClayInput} from "@clayui/form";
import ClayIcon from "@clayui/icon";

export default {
	title: "Shared/InputSets",
	decorators: [SearchBarWidgetConfigurationDecorator],
	component: Element,
};

const Template = (args) => {
	const {
		getInputSetItemProps,
		onInputSetItemChange,
		onInputSetsAdd,
		value,
	} = useInputSets([
		{key: "test1", value: 5},
		{key: "test2", value: 10},
	]);

	const _handleInputSetAdd = () => {
		onInputSetsAdd({key: "hello", value: "something"});
	};

	return (
		<InputSets>
			{value.map((valueItem, valueIndex) => (
				<InputSets.Item
					{...getInputSetItemProps(valueItem, valueIndex)}
				>
					<ClayInput.GroupItem>
						<label>Key</label>

						<ClayInput
							onChange={onInputSetItemChange(valueIndex, "key")}
							type="text"
							value={valueItem.key}
						/>
					</ClayInput.GroupItem>

					<ClayInput.GroupItem>
						<label>Value</label>

						<ClayInput
							onChange={onInputSetItemChange(valueIndex, "value")}
							type="text"
							value={valueItem.value}
						/>
					</ClayInput.GroupItem>
				</InputSets.Item>
			))}

			<ClayButton
				aria-label="add"
				displayType="secondary"
				onClick={_handleInputSetAdd}
			>
				<span className="inline-item inline-item-before">
					<ClayIcon symbol="plus" />
				</span>

				{"Add"}
			</ClayButton>
		</InputSets>
	);
};

export const Default = Template.bind({});
