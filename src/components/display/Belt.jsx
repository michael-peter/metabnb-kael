import { styled } from '@mui/material';
import { Container } from '@mui/system';
import useImages from '../../utils/hooks/useImages';
import Image from './Image';

export default function Belt() {
  const { mbtokenImage, metamaskImage, openseaImage } = useImages();

  return (
    <Wrapper>
      <Container>
        <Image src={mbtokenImage} alt='MB Token image' />
        <Image src={metamaskImage} alt='Meta Mask image' />
        <Image src={openseaImage} alt='Open Sea image' />
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled('section')(({ theme }) => ({
  padding: '10px 0',
  marginBottom: 19,
  background: theme.palette.primary.main,

  '& .MuiContainer-root': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
}));