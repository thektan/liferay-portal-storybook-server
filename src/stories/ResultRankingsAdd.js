import React from "react";

import ResultRankingsAdd from "src/main/resources/META-INF/resources/js/components/ResultRankingsAdd.es.js";
import "src/main/resources/META-INF/resources/css/main.scss";

import portalSearchTuningRankingsWeb from "../../static/learn-resources/portal-search-tuning-rankings-web.json";
import {LearnResourcesContextDecorator} from "../decorators";

export default {
	title: "ResultRankings/ResultRankingsAdd",
	component: ResultRankingsAdd,
	decorators: [LearnResourcesContextDecorator],
};

const Template = (args) => (
	<ResultRankingsAdd
		cancelURL=""
		enterpriseSearchEnabled={true}
		learnResources={{
			["portal-search-tuning-rankings-web"]: portalSearchTuningRankingsWeb,
		}}
	/>
);

export const Default = Template.bind({});

Default.args = {};
