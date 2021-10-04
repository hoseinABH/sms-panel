// components
import PageWithTab from 'components/shared/PageWithTab';
import DefaultTarifs from './DefaultTarifs';
import DefaultPackages from './DefaultPackages';
import OnlineRegisterPackages from './OnlineRegisterPackages';

// icons
import PackageAndTarifIcon from '@material-ui/icons/ListAlt';

/**
 * @component DefaultPackageAndTarif
 */
function DefaultPackageAndTarif() {
  return (
    <PageWithTab
      title="پکیج ها و تعرفه ها"
      pages={[
        {
          title: 'تعرفه های پیشفرض',
          content: <DefaultTarifs />,
        },
        {
          title: 'پکیج های پیشفرض',
          content: <DefaultPackages />,
        },
        {
          title: 'پکیج های ثبت نام آنلاین',
          content: <OnlineRegisterPackages />,
        },
      ]}
      icon={PackageAndTarifIcon}
    />
  );
}

export default DefaultPackageAndTarif;
