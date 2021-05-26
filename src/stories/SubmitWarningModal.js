import React, {useState} from "react";

import ClayButton from "@clayui/button";
import {useModal} from "@clayui/modal";

import SubmitWarningModal from "src/main/resources/META-INF/resources/js/edit_blueprint/SubmitWarningModal";
import {PREVIEW_ERRORS} from "../data/preview-errors";

export default {
	title: "Components/SubmitWarningModal",
	parameters: {
		layout: "fullscreen",
	},
	component: SubmitWarningModal,
	argTypes: {onClose: {action: "onClose"}, onSubmit: {action: "onSubmit"}},
};

const Template = (args) => {
	const [visible, setVisible] = useState(false);
	const {observer, onClose} = useModal({
		onClose: () => setVisible(false),
	});

	return (
		<>
			<ClayButton onClick={() => setVisible(true)}>
				{"Open Modal"}
			</ClayButton>

			{visible && (
				<SubmitWarningModal
					observer={observer}
					onClose={onClose}
					{...args}
				/>
			)}
		</>
	);
};

function getErrors(amount) {
	const errors = [];

	for (let i = 0; i < amount; i++) {
		errors.push(PREVIEW_ERRORS[0]);
	}

	return errors;
}

export const Default = Template.bind({});

Default.args = {
	errors: PREVIEW_ERRORS,
};

export const ManyErrors = Template.bind({});

ManyErrors.args = {
	errors: getErrors(10),
};
