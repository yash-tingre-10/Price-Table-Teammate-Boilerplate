import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import Edit from './edit';
import Save from './save';
import '../style.scss';

registerBlockType('blocks-course/team-member', {
  title: __('Team Member', 'team-members'),
  description: __('A team member item', 'team-members'),
  icon: 'admin-users',
  parent: ['blocks-course/team-members'],
  supports: {
    reusable: false,
    html: false,
  },
  attributes: {
    name: {
      type: 'string',
      source: 'html',
      selector: 'h2',
    },
    bio: {
      type: 'string',
      source: 'html',
      selector: 'h1',
    },
    features: {
      type: 'array',
      default: [],
    },
    showButton: {
      type: 'boolean',
      default: true,
    },
    buttonColor: {
      type: 'string',
      default: '#0073e5',
    }
  },
  edit: Edit,
  save: Save,
});
