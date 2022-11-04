import React from "react";

import SemanticSearch from "src/main/resources/META-INF/resources/semantic_search/js/configuration/index";

export default {
	title: "Components/SemanticSearch",
	component: SemanticSearch,
	argTypes: {onChange: {action: "changed"}, onEnter: {action: "enter"}},
};

const Template = (args) => (
	<SemanticSearch
		availableEmbeddingVectorDimensions={["384", "512", "768"]}
		availableSentenceTransformProviders={{
			huggingFace: "Hugging Face",
			txtai: "txtai",
		}}
		availableLanguageDisplayNames={{
			ar_SA: "Arabic (Saudi Arabia)",
			ca_ES: "Catalan (Spain)",
			zh_CN: "Chinese (China)",
			nl_NL: "Dutch (Netherlands)",
			en_US: "English (United States)",
			fi_FI: "Finnish (Finland)",
			fr_FR: "French (France)",
			de_DE: "German (Germany)",
			hu_HU: "Hungarian (Hungary)",
			ja_JP: "Japanese (Japan)",
			pt_BR: "Portuguese (Brazil)",
			es_ES: "Spanish (Spain)",
			sv_SE: "Swedish (Sweden)",
		}}
		availableAssetEntryClassNames={{
			"com.liferay.blogs.model.BlogsEntry": "Blogs Entry",
			"com.liferay.knowledge.base.model.KBArticle":
				"Knowledge Base Article",
			"com.liferay.message.boards.model.MBMessage":
				"Message Boards Message",
			"com.liferay.journal.model.JournalArticle": "Web Content Article",
			"model.resource.com.liferay.wiki.model.WikiPage": "Wiki Page",
		}}
		model="meow"
		{...args}
	/>
);

export const Default = Template.bind({});
