import Link from 'next/link';
import { ISingleMenuLink } from '@/data/types';
import { SingleMenuLinkContainer } from '../views/styledContainers';
import Image from 'next/image';
import { H4 } from '../views/styledTexts';

export default function SingleMenuLink({
  country,
}: {
  country: ISingleMenuLink;
}) {
  return (
    <SingleMenuLinkContainer>
      <Link href={`/country/${country.countryCode}`}>
        <Image
          src={country.flagImg}
          width={30}
          height={20}
          alt="country flag"
        />
        <H4>{country.countryName}</H4>
      </Link>
    </SingleMenuLinkContainer>
  );
}
