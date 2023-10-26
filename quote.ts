import { BigNumber } from "ethers";
import { ETH, Token, USDC } from "@/tokens";

export type Quote = {
  swapBalance: BigNumber;
  slippagePercent: number;
};

export async function getQuote(
  fromToken: Token,
  toToken: Token,
  fromAmount: BigNumber
): Promise<Quote> {
  console.info(
    `Converting ${fromAmount.toString()} ${fromToken.symbol} to ${
      toToken.symbol
    }`
  );

  // Get the contract for a DEX.

  // Use ethers and the DEX contract to figure out how much TO_TOKEN you can get
  // for the FROM_TOKEN.

  // TODO:
  const swapBalance = BigNumber.from("0");

  console.info(
    `Estimated swap balance: ${swapBalance.toString()} ${toToken.symbol}`
  );

  // Figure out spot values of tokens.

  // Calculate slippage on the swap.

  // TODO:
  const slippagePercent = 0.01;

  console.info(`Slippage: ${slippagePercent * 100}%`);

  return {
    swapBalance,
    slippagePercent,
  };
}
