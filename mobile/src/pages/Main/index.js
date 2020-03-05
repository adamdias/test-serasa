import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import * as S from './styled';
import api from '../../services/api';
import CardBox from '../../components/Card/CardBox';
import CardTitle from '../../components/Card/CardTitle';
import HeaderBox from '../../components/Header/HeaderBox';
import HeaderProfile from '../../components/Header/HeaderProfile';
import Container from '../../components/Container';
import Separator from '../../components/Separator';
import ButtonLink from '../../components/Link';
import IconUpArrow from '../../assets/img/up-arrow.png';
import IconDownArrow from '../../assets/img/down-arrow.png';
import IconDocs from '../../assets/img/docs.png';
import IconWallet from '../../assets/img/wallet.png';
import IconShield from '../../assets/img/shield.png';
import CardEnterprise from '../../components/Card/CardEnterprise';
import ImgLogoClaro from '../../assets/img/claro-logo.png';
import ImgLogoXbox from '../../assets/img/xbox-logo.png';
import ImgLogoSerasa from '../../assets/img/serasa-logo.png';
import ContentCenter from '../../components/ContentCenter';

export default function Main() {
  const [openScoreInfo, setOpenScoreInfo] = useState(false);
  const [user, setUser] = useState({
    id: '',
    name: '',
    score: 0,
    image: '',
  });

  useEffect(() => {
    async function loadUsers() {
      const { data } = await api.get('/users/1');
      setUser(data);
    }

    loadUsers();
  }, []);

  async function handleOpenScoreInfo() {
    setOpenScoreInfo(true);
  }

  async function handleCloseScoreInfo() {
    setOpenScoreInfo(false);
  }

  async function handleTradeNow() {
    const { data } = await api.patch('/users/1', {
      score: 55,
    });
    setUser(data);
  }

  async function handleSeeOffer() {
    const { data } = await api.patch('/users/1', {
      score: 98,
    });
    setUser(data);
  }

  return (
    <ScrollView style={{ marginBottom: 20 }}>
      <HeaderBox score={user.score}>
        <HeaderProfile name={user.name} imgUri={user.image} />
      </HeaderBox>

      <Container type="container-header">
        <CardBox>
          <ContentCenter>
            <S.Score>{user.score}</S.Score>

            <S.ScoreDesc>
              Sua pontuação é{' '}
              {user.score <= 30
                ? 'baixa'
                : user.score > 30 && user.score < 61
                ? 'média'
                : 'alta'}
            </S.ScoreDesc>

            <Separator mt={20} mb={20} />

            {openScoreInfo ? (
              <ButtonLink
                text="Saiba mais"
                img={IconUpArrow}
                onPress={handleCloseScoreInfo}
              />
            ) : (
              <ButtonLink
                text="Saiba mais"
                img={IconDownArrow}
                onPress={handleOpenScoreInfo}
              />
            )}

            {openScoreInfo && (
              <S.ScoreInfo>
                <S.ScoreInfoBox>
                  <S.ScoreInfoTitle>0 - 30</S.ScoreInfoTitle>
                  <S.ScoreInfoGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    colors={['#D6662B', '#E4B414']}
                  />
                </S.ScoreInfoBox>

                <S.ScoreInfoBox spacing>
                  <S.ScoreInfoTitle>31 - 60</S.ScoreInfoTitle>
                  <S.ScoreInfoGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    colors={['#DBB624', '#6FC1BB']}
                  />
                </S.ScoreInfoBox>

                <S.ScoreInfoBox>
                  <S.ScoreInfoTitle>61 - 100</S.ScoreInfoTitle>
                  <S.ScoreInfoGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    colors={['#6EC2BB', '#0A5961']}
                  />
                </S.ScoreInfoBox>
              </S.ScoreInfo>
            )}
          </ContentCenter>
        </CardBox>
      </Container>

      {user.score <= 30 && (
        <Container>
          <CardBox>
            <CardTitle
              title="Negócie suas dívidas"
              subtitle="Você possui uma pendência com"
              color="#CC7142"
              icon={IconDocs}
            />

            <CardEnterprise
              cover={ImgLogoXbox}
              price="por R$79,00"
              priceDiscount="R$ 280,00"
            />

            <ContentCenter>
              <ButtonLink text="Negociar agora" onPress={handleTradeNow} />
            </ContentCenter>
          </CardBox>
        </Container>
      )}

      {user.score > 30 && user.score < 61 && (
        <Container>
          <CardBox>
            <CardTitle
              title="Propostas de crédito"
              subtitle="Encontramos uma oferta de cartão de crédito!"
              color="#458B8E"
              icon={IconWallet}
            />

            <CardEnterprise
              cover={ImgLogoClaro}
              price="limite de R$ 2.000,00"
              priceDesc="Anuidade grátis"
            />

            <ContentCenter>
              <ButtonLink text="Ver oferta" onPress={handleSeeOffer} />
            </ContentCenter>
          </CardBox>
        </Container>
      )}

      {user.score > 50 && (
        <Container>
          <CardBox>
            <CardTitle
              title="Plano de proteção"
              subtitle="Encontramos um plano de proteção para você!"
              color="#00AF80"
              icon={IconShield}
            />

            <CardEnterprise
              cover={ImgLogoSerasa}
              price={user.score < 90 ? 'R$ 250,00' : 'por apenas R$ 99,90'}
              priceDesc="Proteção do RG"
              priceDiscount={user.score > 90 ? 'R$ 250,00' : ''}
            />

            <ContentCenter>
              <ButtonLink text="Ver plano" />
            </ContentCenter>
          </CardBox>
        </Container>
      )}
    </ScrollView>
  );
}
