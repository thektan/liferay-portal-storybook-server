import React from "react";

// import ResultRankingsForm from "src/../../../portal-search-tuning/portal-search-tuning-rankings-web/src/main/resources/META-INF/resources/js/components/ResultRankingsForm.es.js";
// import "src/../../../portal-search-tuning/portal-search-tuning-rankings-web/src/main/resources/META-INF/resources/css/main.scss";

import ResultRankingsForm from "src/main/resources/META-INF/resources/js/components/ResultRankingsForm.es.js";
import "src/main/resources/META-INF/resources/css/main.scss";
import {LearnResourcesContextDecorator} from "../decorators";

export default {
	title: "ResultRankings/ResultRankings",
	component: ResultRankingsForm,
	decorators: [LearnResourcesContextDecorator],
};

const Template = (args) => (
	<div className="result-rankings-root">
		<ResultRankingsForm
			cancelURL=""
			fetchDocumentsHiddenURL="http://www.mocky.io/v2/5e8366a4300000580fcf3df1"
			fetchDocumentsSearchURL="http://www.mocky.io/v2/5e83720e3000007612cf3e32"
			fetchDocumentsVisibleURL="http://www.mocky.io/v2/5ea0e59d320000204394b198"
			formName="testFm"
			initialAliases={[]}
			initialGroupExternalReferenceCode=""
			initialStatus="active"
			initialSXPBlueprintExternalReferenceCode=""
			searchQuery={"Search Term"}
			status={1}
			validateFormURL="http://www.mocky.io/v2/5d9dfbea3200008407329b6f"
			{...args}
		/>
	</div>
);

export const Default = Template.bind({});

Default.args = {};

export const MoreResultRankings = Template.bind({});

MoreResultRankings.args = {
	initialAliases: ["one", "two", "three"],
	validateFormURL: "",
};

export const InactiveResultRankings = Template.bind({});

InactiveResultRankings.args = {
	initialAliases: ["one", "two", "three"],
	initialStatus: "inactive",
	validateFormURL: "",
};

export const NotApplicableResultRankings = Template.bind({});

NotApplicableResultRankings.args = {
	initialAliases: ["one", "two", "three"],
	initialStatus: "not-applicable",
	validateFormURL: "",
};
