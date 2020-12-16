import React from "react";

import Callout from "../../components/callout";
import Text from "../../components/text";

export default () => (
  <>
    <Callout emoji="💡">
      Soft skills - это нетехнические навыки, влияющие на работу. Они включают в
      себя:{" "}
      <Text color="secondary" bold>
        взаимодействие с коллегами
      </Text>
      ,{" "}
      <Text color="secondary" bold>
        подходы к решению проблем
      </Text>
      ,{" "}
      <Text color="secondary" bold>
        организацию труда
      </Text>
      .
    </Callout>

    <p>
      IT в 2020 - это не о 8 часах непрерывного кодинга. Это о сбалансированном
      комплексе технических и нетехнических навыков.
    </p>
  </>
);
