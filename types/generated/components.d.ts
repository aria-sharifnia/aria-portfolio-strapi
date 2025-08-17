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
    buttonText: Schema.Attribute.String;
    description: Schema.Attribute.String;
    file: Schema.Attribute.Media<'files'>;
    iconSVG: Schema.Attribute.Media<'images'>;
    label: Schema.Attribute.String;
    showInAbout: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    showInContact: Schema.Attribute.Boolean;
    themes: Schema.Attribute.Enumeration<['rose', 'sky', 'slate', 'emerald']>;
    url: Schema.Attribute.String;
  };
}

export interface ExperienceExperienceItem extends Struct.ComponentSchema {
  collectionName: 'components_experience_experience_items';
  info: {
    displayName: 'experienceItem';
  };
  attributes: {
    badges: Schema.Attribute.Component<'shared.badge', true>;
    company: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text;
    endDate: Schema.Attribute.Date;
    experienceKind: Schema.Attribute.Enumeration<['work', 'education']> &
      Schema.Attribute.Required;
    gpa: Schema.Attribute.String;
    location: Schema.Attribute.String;
    mode: Schema.Attribute.Enumeration<['remote', 'hybrid', 'onsite']>;
    role: Schema.Attribute.String & Schema.Attribute.Required;
    startDate: Schema.Attribute.Date & Schema.Attribute.Required;
  };
}

export interface SharedBadge extends Struct.ComponentSchema {
  collectionName: 'components_shared_badges';
  info: {
    displayName: 'Badge';
  };
  attributes: {
    label: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<
      ['frontend', 'backend', 'tools', 'other']
    > &
      Schema.Attribute.DefaultTo<'other'>;
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

export interface TestimonialTestimonialCard extends Struct.ComponentSchema {
  collectionName: 'components_testimonial_testimonial_cards';
  info: {
    displayName: 'testimonialCard';
  };
  attributes: {
    badge: Schema.Attribute.Component<'shared.badge', true>;
    company: Schema.Attribute.String & Schema.Attribute.Required;
    profilePicture: Schema.Attribute.Media<'images'>;
    profileUrl: Schema.Attribute.String;
    quotes: Schema.Attribute.Component<'testimonial.testimonial-quote', true>;
    reviewerName: Schema.Attribute.String & Schema.Attribute.Required;
    role: Schema.Attribute.String & Schema.Attribute.Required;
    socialIcon: Schema.Attribute.Media<'images'>;
    sourceUrl: Schema.Attribute.String;
  };
}

export interface TestimonialTestimonialQuote extends Struct.ComponentSchema {
  collectionName: 'components_testimonial_testimonial_quotes';
  info: {
    displayName: 'testimonialQuote';
  };
  attributes: {
    date: Schema.Attribute.Date & Schema.Attribute.Required;
    quote: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about.icon-text': AboutIconText;
      'about.social-link': AboutSocialLink;
      'experience.experience-item': ExperienceExperienceItem;
      'shared.badge': SharedBadge;
      'skills.skill-item': SkillsSkillItem;
      'skills.skills-category': SkillsSkillsCategory;
      'testimonial.testimonial-card': TestimonialTestimonialCard;
      'testimonial.testimonial-quote': TestimonialTestimonialQuote;
    }
  }
}
