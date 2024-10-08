import { Editor, IAllProps } from '@tinymce/tinymce-react';

// TinyMCE so the global var exists
import 'tinymce/tinymce';
// DOM model
import 'tinymce/models/dom/model';
// Theme
import 'tinymce/themes/silver';
// Toolbar icons
import 'tinymce/icons/default';
// Editor styles
import 'tinymce/skins/ui/oxide/skin';

// importing the plugin js.
// if you use a plugin that is not listed here the editor will fail to load
import 'tinymce/plugins/advlist';
import 'tinymce/plugins/anchor';
import 'tinymce/plugins/autolink';
import 'tinymce/plugins/autoresize';
import 'tinymce/plugins/autosave';
import 'tinymce/plugins/charmap';
import 'tinymce/plugins/code';
import 'tinymce/plugins/codesample';
import 'tinymce/plugins/directionality';
import 'tinymce/plugins/emoticons';
import 'tinymce/plugins/fullscreen';
import 'tinymce/plugins/help';
import 'tinymce/plugins/help/js/i18n/keynav/en';
import 'tinymce/plugins/image';
import 'tinymce/plugins/importcss';
import 'tinymce/plugins/insertdatetime';
import 'tinymce/plugins/link';
import 'tinymce/plugins/lists';
import 'tinymce/plugins/media';
import 'tinymce/plugins/nonbreaking';
import 'tinymce/plugins/pagebreak';
import 'tinymce/plugins/preview';
import 'tinymce/plugins/quickbars';
import 'tinymce/plugins/save';
import 'tinymce/plugins/searchreplace';
import 'tinymce/plugins/table';
import 'tinymce/plugins/visualblocks';
import 'tinymce/plugins/visualchars';
import 'tinymce/plugins/wordcount';

import 'tinymce/plugins/emoticons/js/emojis';
import 'tinymce/skins/content/default/content';
import 'tinymce/skins/ui/oxide/content';

const RichTextEditor = (props: IAllProps) => {
	return (
		<Editor
			licenseKey="gpl"
			init={{
				branding: false,
				promotion: false,
				height: 600,
				plugins:
					'preview importcss searchreplace directionality fullscreen ' +
					'image table charmap nonbreaking anchor insertdatetime advlist lists ' +
					'help charmap quickbars',
				toolbar:
					'undo redo blocks fontfamily fontsize bold italic underline strikethrough ' +
					'| align numlist bullist table | lineheight outdent indent| forecolor ' +
					'backcolor removeformat | fullscreen preview print image',
				content_style:
					'body { font-family:Time New Roman, Helvetica,Arial,sans-serif; font-size:14px }',
				toolbar_mode: 'sliding',
				contextmenu: 'image table',
				block_unsupported_drop: false,
				resize: true,
				object_resizing: true,
				content_css: ['./default.css', './oxide.css'],
			}}
      initialValue='<p>Hello World!</p>'
      
			{...props}
		/>
	);
};

export default RichTextEditor;
