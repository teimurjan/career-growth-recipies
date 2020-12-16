import React from "react";

import Table from "../../components/table";
import Text from "../../components/text";

export default () => (
  <Table>
    <Table.Row>
      <Table.Cell>Возраст</Table.Cell>
      <Table.Cell>
        <Text color="secondary" bold>
          23
        </Text>
      </Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Страна</Table.Cell>
      <Table.Cell>
        <Text color="secondary" bold>
          Кыргызстан
        </Text>
      </Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Позиция</Table.Cell>
      <Table.Cell>
        <Text color="secondary" bold>
          Старший Фронтенд Инженер в Toptal
        </Text>
      </Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Опыт работы</Table.Cell>
      <Table.Cell>
        <Text color="secondary" bold>
          5 лет
        </Text>
      </Table.Cell>
    </Table.Row>
  </Table>
);
