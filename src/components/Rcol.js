import { Box, CardHeader } from "@mui/material";
import React, { Suspense } from "react";
import { selectorFamily, useRecoilValue } from "recoil";
export const fetchAssetViewBasicDetails = selectorFamily({
  key: "fetchAssetViewBasicDetailsSelector",
  get: () => async () => {
    try {
      const response = await fetch(window.CONFIG.SERVER.BASE_URL + "/api/v1");
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  },
});

const AssetView = () => {
  const viewBasicDetails = useRecoilValue(fetchAssetViewBasicDetails);
  return (
    <Box includeUpdateEvery={true}>
      <CardHeader includeUpdateEvery={true}></CardHeader>

      <Suspense fallback={<div>Loading...</div>}>
        <Box resource={viewBasicDetails}>1</Box>
      </Suspense>
    </Box>
  );
};
export default AssetView;
