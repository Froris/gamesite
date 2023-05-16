import { PageContentContainer } from '../components/PageContentContainer';
import { ContactsPageTitle } from '../components/contacts/ContactsPageTitle';
import { ContactsMainContent } from '../components/contacts/ContactsMainContent';

export const Contacts = () => {
  return (
    <PageContentContainer height='100vh'>
      <ContactsPageTitle />
      <ContactsMainContent />
    </PageContentContainer>
  );
};
