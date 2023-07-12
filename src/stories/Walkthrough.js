import React from "react";

import Walkthrough from "src/main/resources/META-INF/resources/components/Walkthrough";

import Button from "@clayui/button";
import DropDown from "@clayui/drop-down";

export default {
	title: "Components/Walkthrough",
	component: Walkthrough,
	args: {
		closeOnClickOutside: false,
		closeable: true,
		pages: {
			"/home": ["step-1"],
		},
		skippable: true,
		steps: [
			{
				content: "<span>Content 1</span><br/><code>Hello1</code>",
				darkbg: true,
				id: "step-1",
				nodeToHighlight: "#step1",
				title: "Step 1",
			},
			{
				content: "<span>Content 2</span>",
				darkbg: true,
				id: "step-2",
				nodeToHighlight: "#step2",
				title: "Step 2",
			},
		],
	},
};

const items = [
	{
		children: [
			{id: 2, name: "Apple"},
			{id: 3, name: "Banana"},
			{id: 4, name: "Mangos"},
		],
		id: 1,
		name: "Fruit",
	},
	{
		children: [
			{id: 6, name: "Potatoes"},
			{id: 7, name: "Tomatoes"},
			{id: 8, name: "Onions"},
		],
		id: 5,
		name: "Vegetable",
	},
];

const Template = (args) => (
	<>
		<Walkthrough {...args} />

		<DropDown trigger={<Button id="#step1">Select</Button>}>
			<DropDown.ItemList items={items}>
				{(item) => (
					<DropDown.Group
						header={item.name}
						items={item.children}
						key={item.name}
					>
						{(item) => (
							<DropDown.Item
								id="#step2"
								key={item.name}
								onClick={() => {}}
							>
								{item.name}
							</DropDown.Item>
						)}
					</DropDown.Group>
				)}
			</DropDown.ItemList>
		</DropDown>
	</>
);

export const ShowStepInDropdown = Template.bind({});
