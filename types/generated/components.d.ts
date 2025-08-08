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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about.icon-text': AboutIconText;
      'about.social-link': AboutSocialLink;
    }
  }
}
