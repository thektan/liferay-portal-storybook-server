import React, {useState} from "react";

import ClayButton from "@clayui/button";
import {useModal} from "@clayui/modal";

import SubmitWarningModal from "src/main/resources/META-INF/resources/sxp_blueprint_admin/js/shared/SubmitWarningModal";
import {SXP_BLUEPRINT_ERRORS} from "../data/errors";

export default {
	title: "SXP/Components/SubmitWarningModal",
	parameters: {
		layout: "fullscreen",
	},
	component: SubmitWarningModal,
	argTypes: {
		onClose: {action: "onClose"},
		onSubmit: {action: "onSubmit"},
	},
	args: {
		visible: true,
	},
};

const Template = (args) => {
	const [visible, setVisible] = useState(false);

	return (
		<>
			<ClayButton onClick={() => setVisible(true)}>
				{"Open Modal"}
			</ClayButton>

			<p style={{width: "500px"}}>
				Reload the page or toggle the "visible" state to open the modal
				again. Storybook has an issue with updating the "visible" state
				when closing the modal where the overlay stays open. Will need
				to look into if there's a way of handling internal states in a
				storybook page.
			</p>

			<SubmitWarningModal
				message={
					"The blueprint configuration has errors that may cause unexpected results. Use the preview panel to review these errors."
				}
				onClose={() => {
					setVisible(false);
				}}
				visible={visible}
				{...args}
			/>
		</>
	);
};

function getErrors(amount) {
	const errors = [];

	for (let i = 0; i < amount; i++) {
		errors.push(SXP_BLUEPRINT_ERRORS[0]);
	}

	return errors;
}

export const Default = Template.bind({});

Default.args = {
	errors: SXP_BLUEPRINT_ERRORS,
};

export const ManyErrors = Template.bind({});

ManyErrors.args = {
	errors: getErrors(10),
};
