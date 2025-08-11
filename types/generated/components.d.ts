import type { Schema, Struct } from '@strapi/strapi';

export interface AboutIconText extends Struct.ComponentSchema {
  collectionName: 'components_about_icon_texts';
  info: {
    displayName: 'iconText';
    icon: 'bulletList';
  };
  attributes: {
    iconSVG: Schema.Attribute.Media<'images'>;
    text: Schema.Attribute.String;
  };
}

export interface AboutSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_about_social_links';
  info: {
    displayName: 'socialLink';
    icon: 'user';
  };
  attributes: {
    iconSVG: Schema.Attribute.Media<'images'>;
    url: Schema.Attribute.String;
  };
}

export interface SkillsSkillItem extends Struct.ComponentSchema {
  collectionName: 'components_skills_skill_items';
  info: {
    displayName: 'skillItem';
    icon: 'apps';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'>;
    label: Schema.Attribute.String;
    level: Schema.Attribute.Decimal;
  };
}

export interface SkillsSkillsCategory extends Struct.ComponentSchema {
  collectionName: 'components_skills_skills_categories';
  info: {
    displayName: 'skillsCategory';
    icon: 'stack';
  };
  attributes: {
    items: Schema.Attribute.Component<'skills.skill-item', true>;
    palette: Schema.Attribute.Enumeration<['aqua', 'emerald', 'sky']>;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about.icon-text': AboutIconText;
      'about.social-link': AboutSocialLink;
      'skills.skill-item': SkillsSkillItem;
      'skills.skills-category': SkillsSkillsCategory;
    }
  }
}
