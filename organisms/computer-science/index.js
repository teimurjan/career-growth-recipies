import React, { useState, useEffect } from "react";
import { Row, Col } from "react-simple-flex-grid";
import { useSteps, useDeck } from "mdx-deck";

import CardTab from "../../components/card-tab";
import CardsTabs from "../../components/cards-tabs";
import FadeIn from "../../components/fade-in";
import Picture from "../../components/picture";
import Text from "../../components/text";

import cleanCodeBookImg from "../../images/clean-code-book.jpg";

export default () => {
  const state = useDeck();
  const step = useSteps(3);
  const [freeze, setFreeze] = useState(true);

  // Do not change step untill the tabs are visible
  useEffect(() => {
    if (freeze) {
      state.setStep(0);
    }
  }, [freeze, step]);

  return (
    <FadeIn delay={2000} onComplete={() => setFreeze(false)}>
      <CardsTabs activeIndex={freeze ? 0 : step - 1} style={{ height: 625 }}>
        <CardTab title="Языки программирования">
          Языки низкого уровня - производительны и максимально приближенными к
          машинному коду. Высокоуровневые языки - более удобны и просты в
          использовании.
          <br />
          <br />
          Погружение с высокого уровня в низкий будет{" "}
          <Text color="secondary" bold>
            равномерным и в меру ускоренным
          </Text>
          . Начинать с низкого уровня не советую никому.
        </CardTab>
        <CardTab title="Алгоритмы и структуры данных">
          Структуры данных и алгоритмы - фундаментальные знания необходимые
          каждому высококлассному инженеру.
          <br />
          <br />
          Изучение на ранних этапах карьеры{" "}
          <Text color="secondary" bold>
            развивает аналитическое мышление
          </Text>
          ,{" "}
          <Text color="secondary" bold>
            преумножает шансы на собеседованиях
          </Text>
          , а также позволяет{" "}
          <Text color="secondary" bold>
            избегать ненужных проблем с производительностью
          </Text>
          .
        </CardTab>
        <CardTab title="Чистый код">
          <Row gutter={40}>
            <Col span={3}>
              <Picture width="100%" src={cleanCodeBookImg} />
            </Col>
            <Col style={{ position: "relative" }} span={9}>
              Чистый код нужен точно также как этикет в обществе. Его принципам
              должен следовать каждый, кто называет себя специалистом в IT.
              <br />
              <br />В награду за написание чистого кода вы получите:{" "}
              <Text color="secondary" bold>
                признательность коллег
              </Text>
              ,{" "}
              <Text color="secondary" bold>
                экономию времени == денег
              </Text>
              ,{" "}
              <Text color="secondary" bold>
                уверенность в качестве выполненной работы
              </Text>
              .
              <br />
              <br />
              ℹ️ Рекомендация к прочтению:{" "}
              <Text bold>
                Clean Code: A Handbook of Agile Software Craftsmanship
              </Text>
              .
            </Col>
          </Row>
        </CardTab>
      </CardsTabs>
    </FadeIn>
  );
};
