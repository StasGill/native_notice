import React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

export const Icons = ({ color, type }) => {
  if (type === "Home") {
    return (
      <View>
        <Svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill={color}
        >
          <Path d="M32 18.451l-16-12.42-16 12.42v-5.064l16-12.42 16 12.42zM28 18v12h-8v-8h-8v8h-8v-12l12-9z"></Path>
        </Svg>
      </View>
    );
  }
  if (type === "Settings") {
    return (
      <View>
        <Svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill={color}
        >
          <Path d="M29.181 19.070c-1.679-2.908-0.669-6.634 2.255-8.328l-3.145-5.447c-0.898 0.527-1.943 0.829-3.058 0.829-3.361 0-6.085-2.742-6.085-6.125h-6.289c0.008 1.044-0.252 2.103-0.811 3.070-1.679 2.908-5.411 3.897-8.339 2.211l-3.144 5.447c0.905 0.515 1.689 1.268 2.246 2.234 1.676 2.903 0.672 6.623-2.241 8.319l3.145 5.447c0.895-0.522 1.935-0.82 3.044-0.82 3.35 0 6.067 2.725 6.084 6.092h6.289c-0.003-1.034 0.259-2.080 0.811-3.038 1.676-2.903 5.399-3.894 8.325-2.219l3.145-5.447c-0.899-0.515-1.678-1.266-2.232-2.226zM16 22.479c-3.578 0-6.479-2.901-6.479-6.479s2.901-6.479 6.479-6.479c3.578 0 6.479 2.901 6.479 6.479s-2.901 6.479-6.479 6.479z"></Path>
        </Svg>
      </View>
    );
  }
  if (type === "Add") {
    return (
      <View style={{ paddingTop: 5 }}>
        <Svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="43"
          height="43"
          viewBox="0 0 251.882 251.882"
          fill={color}
        >
          <Path
            d="M215.037,36.846c-49.129-49.128-129.063-49.128-178.191,0c-49.127,49.127-49.127,129.063,0,178.19
		c24.564,24.564,56.83,36.846,89.096,36.846s64.531-12.282,89.096-36.846C264.164,165.909,264.164,85.973,215.037,36.846z
		 M49.574,202.309c-42.109-42.109-42.109-110.626,0-152.735c21.055-21.054,48.711-31.582,76.367-31.582s55.313,10.527,76.367,31.582
		c42.109,42.109,42.109,110.626,0,152.735C160.199,244.417,91.683,244.417,49.574,202.309z"
          />
          <Path
            d="M194.823,116.941h-59.882V57.059c0-4.971-4.029-9-9-9s-9,4.029-9,9v59.882H57.059c-4.971,0-9,4.029-9,9s4.029,9,9,9h59.882
		v59.882c0,4.971,4.029,9,9,9s9-4.029,9-9v-59.882h59.882c4.971,0,9-4.029,9-9S199.794,116.941,194.823,116.941z"
          />
        </Svg>
      </View>
    );
  }
};
