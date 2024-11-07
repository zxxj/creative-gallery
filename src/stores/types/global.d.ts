import type { TemplateProps } from './template';
import type { UserProps } from './user';

export interface GlobalDataProps {
  user: UserProps;
  templates: TemplateProps[];
}
