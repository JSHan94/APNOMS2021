// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgUpdatePost } from "./types/blog/tx";
import { MsgSendIbcPost } from "./types/blog/tx";
import { MsgUpdateSentPost } from "./types/blog/tx";
import { MsgCreateSentPost } from "./types/blog/tx";
import { MsgDeletePost } from "./types/blog/tx";
import { MsgCreateTimedoutPost } from "./types/blog/tx";
import { MsgDeleteTimedoutPost } from "./types/blog/tx";
import { MsgDeleteSentPost } from "./types/blog/tx";
import { MsgCreatePost } from "./types/blog/tx";
import { MsgUpdateTimedoutPost } from "./types/blog/tx";
const types = [
    ["/hello.planet.blog.MsgUpdatePost", MsgUpdatePost],
    ["/hello.planet.blog.MsgSendIbcPost", MsgSendIbcPost],
    ["/hello.planet.blog.MsgUpdateSentPost", MsgUpdateSentPost],
    ["/hello.planet.blog.MsgCreateSentPost", MsgCreateSentPost],
    ["/hello.planet.blog.MsgDeletePost", MsgDeletePost],
    ["/hello.planet.blog.MsgCreateTimedoutPost", MsgCreateTimedoutPost],
    ["/hello.planet.blog.MsgDeleteTimedoutPost", MsgDeleteTimedoutPost],
    ["/hello.planet.blog.MsgDeleteSentPost", MsgDeleteSentPost],
    ["/hello.planet.blog.MsgCreatePost", MsgCreatePost],
    ["/hello.planet.blog.MsgUpdateTimedoutPost", MsgUpdateTimedoutPost],
];
const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw new Error("wallet is required");
    const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee = defaultFee, memo = null }) => memo ? client.signAndBroadcast(address, msgs, fee, memo) : client.signAndBroadcast(address, msgs, fee),
        msgUpdatePost: (data) => ({ typeUrl: "/hello.planet.blog.MsgUpdatePost", value: data }),
        msgSendIbcPost: (data) => ({ typeUrl: "/hello.planet.blog.MsgSendIbcPost", value: data }),
        msgUpdateSentPost: (data) => ({ typeUrl: "/hello.planet.blog.MsgUpdateSentPost", value: data }),
        msgCreateSentPost: (data) => ({ typeUrl: "/hello.planet.blog.MsgCreateSentPost", value: data }),
        msgDeletePost: (data) => ({ typeUrl: "/hello.planet.blog.MsgDeletePost", value: data }),
        msgCreateTimedoutPost: (data) => ({ typeUrl: "/hello.planet.blog.MsgCreateTimedoutPost", value: data }),
        msgDeleteTimedoutPost: (data) => ({ typeUrl: "/hello.planet.blog.MsgDeleteTimedoutPost", value: data }),
        msgDeleteSentPost: (data) => ({ typeUrl: "/hello.planet.blog.MsgDeleteSentPost", value: data }),
        msgCreatePost: (data) => ({ typeUrl: "/hello.planet.blog.MsgCreatePost", value: data }),
        msgUpdateTimedoutPost: (data) => ({ typeUrl: "/hello.planet.blog.MsgUpdateTimedoutPost", value: data }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
