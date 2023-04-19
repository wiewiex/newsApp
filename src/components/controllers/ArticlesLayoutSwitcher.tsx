import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { ArticlesLayoutSwitcherContainer } from '../views/styledContainers';
import { switchLayout } from '@/store/articlesLayout';

export default function ArticlesLayoutSwitcher() {
  const dispatch = useDispatch();

  return (
    <ArticlesLayoutSwitcherContainer onClick={() => dispatch(switchLayout())}>
      <Image
        src="/tiles-list.svg"
        width={30}
        height={30}
        alt="articles layout switcher icon"
      />
    </ArticlesLayoutSwitcherContainer>
  );
}
