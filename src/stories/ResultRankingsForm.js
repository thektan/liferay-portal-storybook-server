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
			cancelUrl=""
			fetchDocumentsHiddenUrl="http://www.mocky.io/v2/5e8366a4300000580fcf3df1"
			fetchDocumentsSearchUrl="http://www.mocky.io/v2/5e83720e3000007612cf3e32"
			fetchDocumentsVisibleUrl="http://www.mocky.io/v2/5ea0e59d320000204394b198"
			formName="testFm"
			initialAliases={[]}
			initialInactive={false}
			saveActionUrl="#"
			searchQuery={"Search Term"}
			initialSXPBlueprintExternalReferenceCode=""
			initialGroupExternalReferenceCode=""
			status={1}
			validateFormUrl="http://www.mocky.io/v2/5d9dfbea3200008407329b6f"
			{...args}
		/>
	</div>
);

export const Default = Template.bind({});

Default.args = {};

export const MoreResultRankings = Template.bind({});

MoreResultRankings.args = {
	initialAliases: ["one", "two", "three"],
	validateFormUrl: "",
};
