import React from "react";
import { Linkedin, GitHub, Plus, MessageCircle } from "react-feather";

import Flex from "../../components/flex";
import IconCard from "../../components/icon-card";

export default () => (
  <Flex alignItems="center" justifyContent="space-between">
    <IconCard
      icon={<Linkedin size={100} color="#fff" />}
      alt="LinkedIn"
      backgroundColor="#2D64BC"
    />
    <Plus size={80} />
    <IconCard
      icon={<GitHub size={100} color="#000" />}
      alt="GitHub"
      backgroundColor="#fff"
    />
  </Flex>
);
