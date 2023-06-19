class CLEARNODE_STATE{
}
class ReqPacket_HellsChickenDungeonCommon{
}
class ReqPacket_EnterHellsChickenDungeonCommand{
	dungeonid: number
}
class ResPacket_EnterHellsChickenDungeonCommand{
	saveInfo: HellsChickenDungeonSaveInfoFormat
	recentCharacterList: HellsChickenDungeonGetCharacterInfoFormat[]
	SaveInfo: HellsChickenDungeonSaveInfoFormat
	RecentCharacterList: HellsChickenDungeonGetCharacterInfoFormat[]
}
class HttpEnterHellsChickenDungeonCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_ReEnterHellsChickenDungeonCommand{
	dungeonid: number
}
class ResPacket_ReEnterHellsChickenDungeon{
	saveInfo: HellsChickenDungeonSaveInfoFormat
	recentCharacterList: HellsChickenDungeonGetCharacterInfoFormat[]
	SaveInfo: HellsChickenDungeonSaveInfoFormat
	RecentCharacterList: HellsChickenDungeonGetCharacterInfoFormat[]
}
class HttpReEnterHellsChickenDungeonCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_UpdateHellsChickenDungeonCommand{
	characterInfos: HellsChickenDungeonGetCharacterInfoContainGacksungFormat[]
	map: RandomDungeonMapFormat
	choiceEventList: number[]
}
class ResPacket_UpdateHellsChickenDungeonCommand{
	saveInfo: HellsChickenDungeonSaveInfoFormat
	SaveInfo: HellsChickenDungeonSaveInfoFormat
}
class HttpUpdateHellsChickenDungeonCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_ExitHellsChickenDungeonCommand{
	mainchapterid: number
	subchapterid: number
	nodeid: number
	isClear: number
}
class ResPacket_ExitHellsChickenDungeonCommand{
	saveInfo: HellsChickenDungeonSaveInfoFormat
	iswin: boolean
	statistics: DungeonStatisticsDataFormat[]
	cleartype: number
	adduserexp: number
	personalityinfos: StagePersonalityInfoFormat[]
	normalrewards: Element[]
	exrewards: Element[]
	expticket: Element[]
	givebackstaminabyDefeat: Element
	IsWin: boolean
	Statistics: DungeonStatisticsDataFormat[]
}
class HttpExitHellsChickenDungeonCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_EnterHellsChickenDungeonMapNodeCommand{
	currentnode: DungeonMapNodeFormat
	abnormalityids: number[]
	participatedPIds: number[]
}
class ResPacket_EnterHellsChickenDungeonMapNodeCommand{
	abnormalityLogs: AbnormalityUnlockInformationFormat[]
	passingNodeIds: number[]
	currentNode: DungeonMapNodeFormat
	AbnormalityLogs: AbnormalityUnlockInformationFormat[]
	PassingNodeIds: number[]
	CurrentNode: DungeonMapNodeFormat
}
class HttpEnterHellsChickenDungeonMapNodeCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_UpdateHellsChickenDungeonMapNodeCommand{
	choiceEventData: DungeonChoiceEventSaveDataFormat
	dungeonUnitList: HellsChickenDungeonSaveUnitInfoFormat[]
	updatedEgoGifts: DungeonMapEgoGiftFormat[]
}
class ResPacket_UpdateHellsChickenDungeonMapNodeCommand{
	prevChoiceEvent: DungeonChoiceEventSaveDataFormat[]
	currentEgoGifts: DungeonMapEgoGiftFormat[]
	PrevChoiceEvent: DungeonChoiceEventSaveDataFormat[]
	CurrentEgoGifts: DungeonMapEgoGiftFormat[]
}
class HttpUpdateHellsChickenDungeonMapNodeCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_EnterHellsChickendungeonMapNodeBattleAfterChoice{
	participatedPids: number[]
	abnormalityids: number[]
	dungeonUnitList: HellsChickenDungeonSaveUnitInfoFormat[]
}
class ResPacket_EnterHellsChickendungeonMapNodeBattleAfterChoice{
	abnormalityLogs: AbnormalityUnlockInformationFormat[]
	AbnormalityLogs: AbnormalityUnlockInformationFormat[]
}
class HttpEnterHellsChickendungeonMapNodeBattleAfterChoice{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_ExitHellsChickenDungeonMapNodeCommand{
	dungeonunitlist: HellsChickenDungeonSaveUnitInfoFormat[]
	noderesult: number
	choiceEventData: DungeonChoiceEventSaveDataFormat
	battlePassParameters: BattlePassParameterFormat
	abnormalityLogs: AbnormalityUnlockInformationFormat[]
	isupdatedEgoSkillStock: number
	egoSkillStockList: DungeonEgoSkillStockFormat[]
	updatedEgoGifts: DungeonMapEgoGiftFormat[]
	statistics: DungeonStatisticsDataFormat[]
}
class ResPacket_ExitHellsChickenDungeonMapNodeCommand{
	currentInfo: HellsChickenDungeonCurrentInfoFormat
	abnormalityLogs: AbnormalityUnlockInformationFormat[]
	CurrentInfo: HellsChickenDungeonCurrentInfoFormat
	AbnormalityLogs: AbnormalityUnlockInformationFormat[]
}
class HttpExitHellsChickenDungeonMapNodeCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_UpdateHellsChickendungeonUnits{
	dungeonunitlist: HellsChickenDungeonSaveUnitInfoFormat[]
}
class HttpUpdateHellsChickendungeonUnitsCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_AcquireEgoGiftEventHellsChickenDungeonCommand{
	selectIndexList: number[]
}
class ResPacket_AcquireEgoGiftEventHellsChickenDungeonCommand{
	egoGifts: DungeonMapEgoGiftFormat[]
	remainRewardEvent: RandomDungeonEncounterRewardEventInfoFormat[]
	EgoGifts: DungeonMapEgoGiftFormat[]
	RemainRewardEvent: RandomDungeonEncounterRewardEventInfoFormat[]
}
class HttpAcquireEgoGiftEventDataHellsChickenDungeonCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_AcquireCharacterEventDataHellsChickenDungeonCommand{
	acquirePersonalities: HellsChickenDungeonGetCharacterInfoFormat[]
}
class ResPacket_AcquireCharacterEventDataHellsChickenDungeonCommand{
	dungeonUnitList: HellsChickenDungeonSaveUnitInfoFormat[]
	remainRewardEvent: RandomDungeonEncounterRewardEventInfoFormat[]
	DungeonUnitList: HellsChickenDungeonSaveUnitInfoFormat[]
	RemainRewardEvent: RandomDungeonEncounterRewardEventInfoFormat[]
}
class HttpAcquireCharacterEventHellsChickenDungeonCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_PersonalityLevelUpEventHellsChickenDungeonCommand{
	levelUpPersonalityFormat: HellsChickenDungeonLevelUpPersonalityInfoFormat
}
class ResPacket_PersonalityLevelUpEventHellsChickenDungeonCommand{
	dungeonUnitList: HellsChickenDungeonSaveUnitInfoFormat[]
	remainRewardEvent: RandomDungeonEncounterRewardEventInfoFormat[]
	DungeonUnitList: HellsChickenDungeonSaveUnitInfoFormat[]
	RemainRewardEvent: RandomDungeonEncounterRewardEventInfoFormat[]
}
class HttpLevelUpPersonalityEventDataHellsChickenDungeonCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ResPacket_GetHellsChickenState{
	dollsNum: number
	rewardState: number[]
}
class HttpGetHellsChickenStateCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_AcquireHellsChickenReward{
	rewardId: number
}
class ResPacket_AcquireHellsChickenReward{
	rewardState: number[]
	rewards: Element[]
}
class HttpAcquireHellsChickenRewardCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_SetTimeMinuteOffset{
	password: string
	timeMinuteOffset: number
}
class ResPacket_SetTimeMinuteOffset{
	serverTime: string
}
class HttpSetTimeMinuteOffsetCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_ChangeCurrentAnnouncer{
	announcerIds: number[]
}
class HttpChangeCurrentAnnouncerCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ResPacket_GetAttendanceState{
	rewardState: number[]
	consumption: number
}
class HttpGetAttendanceStateCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_AcquireAttendanceReward{
	partid: number
	id: number
}
class ResPacket_AcquireAttendanceReward{
	rewardState: number[]
	rewards: Element[]
}
class HttpAcquireAttendanceRewardCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_BattlePassMissionReward{
	missionType: number
	missionId: number
}
class HttpBattlePassMissionRewardCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_BattlePassReward{
	level: number
}
class ResPacket_BattlePassReward{
	resultElements: Element[]
}
class HttpBattlePassRewardCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class HttpBattlePassRewardAllCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ResPacket_BattlePassExLevelReward{
	resultElements: Element[]
}
class HttBattlePassExLevelRewardCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_PurchaseBattlePassLevel{
	level: number
}
class HttpPurchaseBattlePassLevelCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_EnterExpDungeon{
	dungeonid: number
}
class ResPacket_EnterExpDungeon{
	isclear: number
}
class HttpEnterExpDungeonCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_ExitExpDungeon{
	formationId: number
	isWin: number
	supportCharacterId: number
	supportParticipate: boolean
	battlePassParameters: BattlePassParameterFormat
}
class ResPacket_ExitExpDungeon{
	userExp: number
	personalityinfos: StagePersonalityInfoFormat[]
	acquiredtickets: Element[]
	rewards: Element[]
	clearInfo: ExpDungeonClearInfoFormat
}
class HttpExitExpDungeonCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_SkipExpDungeon{
	dungeonid: number
}
class ResPacket_SkipExpDungeon{
	userExp: number
	rewards: Element[]
}
class HttpSkipExpDungeonCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_EnterThreadDungeon{
	dungeonid: number
	level: number
	abnormalityids: number[]
}
class ResPacket_EnterThreadDungeon{
	isClear: number
	abnormalityLogs: AbnormalityUnlockInformationFormat[]
}
class HttpEnterThreadDungeonCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_ExitThreadDungeon{
	isWin: number
	battlePassParameters: BattlePassParameterFormat
	abnormalityLogs: AbnormalityUnlockInformationFormat[]
}
class ResPacket_ExitThreadDungeon{
	userExp: number
	rewards: Element[]
	clearInfo: ThreadDungeonClearInfoFormat
}
class HttpExitThreadDungeonCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ResPacket_GetDailyDungeonClearInfo{
	expDungeonClearInfo: ExpDungeonClearInfoFormat[]
	threadDungeonClearInfo: ThreadDungeonClearInfoFormat[]
	ExpDungeonClearInfo: ExpDungeonClearInfoFormat[]
	ThreadDungeonClearInfo: ThreadDungeonClearInfoFormat[]
}
class HttpGetDailyDungeonClearInfoCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_SkipThreadDungeon{
	dungeonid: number
	dungeonlevel: number
}
class ResPacket_SkipThreadDungeon{
	userExp: number
	rewards: Element[]
}
class HttpSkipThreadDungeonCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ResPacket_GetDailyLoginState{
	weekid: number
	id: number
	rewardstates: DailyLoginRewardStateFormat[]
}
class HttpGetDailyLoginStateCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_AcquireDailyLoginReward{
	weekid: number
	id: number
}
class ResPacket_AcquireDailyLoginReward{
	rewards: Element[]
}
class HttpAcquireDailyLoginRewardCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ResPacket_GetDanteNoteState{
	page: number
	todayPage: number
}
class HttpGetDanteNoteStateCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class HttpSkipTutorialCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_GetStageProgressRateRewardCommand{
	mainchapterid: number
	subchapterid: number
	rewardType: number
}
class ResPacket_GetStageProgressRateRewardCommand{
	rewardList: Element[]
	Reward: Element[]
}
class HttpGetStageProgressRateRewardCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_EnterStageBattleCommand{
	mainchapterid: number
	subchapterid: number
	nodeid: number
	stageid: number
	abnormalityids: number[]
}
class ResPacket_EnterStageBattleCommand{
	abnormalityLogs: AbnormalityUnlockInformationFormat[]
	AbnormalityLogs: AbnormalityUnlockInformationFormat[]
}
class HttpEnterStageBattleCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_ExitStageBattleCommand{
	mainchapterid: number
	subchapterid: number
	nodeid: number
	stageid: number
	iswin: boolean
	turn: number
	formationid: number
	battlePassParameters: BattlePassParameterFormat
	supportCharacterId: number
	supportPersonalityId: number
	supportEgoIds: number[]
	supportParticipate: boolean
	abnormalityLogs: AbnormalityUnlockInformationFormat[]
}
class ResPacket_ExitStageBattleCommand{
	stageid: number
	iswin: boolean
	cleartype: number
	addexptouser: number
	personalityinfos: StagePersonalityInfoFormat[]
	expticket: Element[]
	rewarditem: Element[]
	exrewarditem: Element[]
	givebackstaminabyDefeat: Element
	abnormalityLogs: AbnormalityUnlockInformationFormat[]
	AbnormalityLogs: AbnormalityUnlockInformationFormat[]
}
class HttpExitStageBattleCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_GetDungeonSaveInfoAll{
	railwayDungeonId: number
}
class ResPacket_GetDungeonSaveInfoAll{
	storySaveInfo: StoryDungeonSaveInfoFormat
	mirrorOriginSaveInfo: MirrorDungeonSaveInfoFormat
	railwaySaveInfo: RailwayDungeonSaveInfoFormat
	hellschickenSaveInfo: HellsChickenDungeonSaveInfoFormat
	mirrorDungeonClearInfos: MirrorDungeonClearInfoFormat[]
}
class HttpGetDungeonSaveInfoAllCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ResPacket_GetStoryDungeonSaveInfo{
	saveInfo: StoryDungeonSaveInfoFormat
	SaveInfo: StoryDungeonSaveInfoFormat
}
class HttpGetStoryDungeonSaveInfoCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_EnterStoryDungeon{
	mainchapterid: number
	subchapterid: number
	nodeid: number
	stageid: number
	personalities: StoryDungeonSaveUnitInfoFormat[]
}
class ResPacket_EnterStoryDungeon{
	saveInfo: StoryDungeonSaveInfoFormat
	nodesRecord: number[]
	SaveInfo: StoryDungeonSaveInfoFormat
	NodesRecord: number[]
}
class HttpEnterEnterStoryDungeonCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_ReEnterStoryDungeonCommand{
	stageid: number
}
class ResPacket_ReEnterStoryDungeon{
	saveInfo: StoryDungeonSaveInfoFormat
	nodesRecord: number[]
	statistics: DungeonStatisticsDataFormat[]
	SaveInfo: StoryDungeonSaveInfoFormat
	NodesRecord: number[]
	Statistics: DungeonStatisticsDataFormat[]
}
class HttpReEnterStoryDungeonCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_ExitStoryDungeonCommand{
	mainchapterid: number
	subchapterid: number
	nodeid: number
	stageid: number
}
class ResPacket_ExitStoryDungeonCommand{
	saveInfo: StoryDungeonSaveInfoFormat
	iswin: boolean
	cleartype: number
	addexptouser: number
	personalityinfos: StagePersonalityInfoFormat[]
	expticket: Element[]
	rewarditem: Element[]
	exrewarditem: Element[]
	givebackstaminabyDefeat: Element
	statistics: DungeonStatisticsDataFormat[]
	isGacksung: boolean
	SaveInfo: StoryDungeonSaveInfoFormat
	Statistics: DungeonStatisticsDataFormat[]
	IsGacksung: boolean
}
class HttpExitStoryDungeonCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_EnterStoryDungeonMapNodeCommand{
	floornumber: number
	sectornumber: number
	nodeid: number
	abnormalityids: number[]
	participatedPIds: number[]
}
class ResPacket_EnterStoryDungeonMapNodeCommand{
	node: DungeonMapNodeFormat
	nr: number
	abnormalityLogs: AbnormalityUnlockInformationFormat[]
	Node: DungeonMapNodeFormat
	NodeResult: number
	AbnormalityLogs: AbnormalityUnlockInformationFormat[]
}
class HttpEnterStoryDungeonMapNodeCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_UpdateStoryDungeonMapNodeCommand{
	choiceEventData: DungeonChoiceEventSaveDataFormat
	dungeonUnitList: StoryDungeonSaveUnitInfoFormat[]
	updatedEgoGifts: DungeonMapEgoGiftFormat[]
}
class ResPacket_UpdateStoryDungeonMapNodeCommand{
	prevChoiceEvent: DungeonChoiceEventSaveDataFormat[]
	currentEgoGifts: DungeonMapEgoGiftFormat[]
	isAllDie: number
	PrevChoiceEvent: DungeonChoiceEventSaveDataFormat[]
	CurrentEgoGifts: DungeonMapEgoGiftFormat[]
	IsAllDie: number
}
class HttpUpdateStoryDungeonMapNodeCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_EnterStoryDungeonMapNodeBattleAfterChoice{
	dungeonUnitList: StoryDungeonSaveUnitInfoFormat[]
	participatedPids: number[]
	abnormalityids: number[]
}
class ResPacket_EnterStoryDungeonMapNodeBattleAfterChoice{
	abnormalityLogs: AbnormalityUnlockInformationFormat[]
	isAllDie: number
	AbnormalityLogs: AbnormalityUnlockInformationFormat[]
	IsAllDie: number
}
class HttpEnterStoryDungeonMapNodeBattleAfterChoice{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_ExitStoryDungeonMapNodeCommand{
	noderesult: number
	choiceEventData: DungeonChoiceEventSaveDataFormat
	dungeonunitlist: StoryDungeonSaveUnitInfoFormat[]
	battlePassParameters: BattlePassParameterFormat
	abnormalityLogs: AbnormalityUnlockInformationFormat[]
	openedNode: number
	isupdatedEgoSkillStock: number
	egoSkillStockList: DungeonEgoSkillStockFormat[]
	updatedEgoGifts: DungeonMapEgoGiftFormat[]
	statistics: DungeonStatisticsDataFormat[]
}
class ResPacket_ExitStoryDungeonMapNodeCommand{
	saveInfo: StoryDungeonSaveInfoFormat
	abnormalityLogs: AbnormalityUnlockInformationFormat[]
	acquiredEgogifts: DungeonMapEgoGiftFormat[]
	isAllDie: number
	SaveInfo: StoryDungeonSaveInfoFormat
	AbnormalityLogs: AbnormalityUnlockInformationFormat[]
	AcquiredEgogifts: DungeonMapEgoGiftFormat[]
	IsAllDie: number
}
class HttpExitStoryDungeonMapNodeCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_UpdateStoryDungeonUnits{
	dungeonunitlist: StoryDungeonSaveUnitInfoFormat[]
}
class HttpUpdateStoryDungeonUnitsCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ResPacket_ReturnSavePointStoryDungeonMap{
	currentInfo: StoryDungeonCurrentInfoFormat
	CurrentInfo: StoryDungeonCurrentInfoFormat
}
class HttpReturnSavePointStoryDungeonMapCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ResPacket_ExitStoryDungeonMapNodeByForcely{
	currentInfo: StoryDungeonCurrentInfoFormat
	isAllDie: number
	CurrentInfo: StoryDungeonCurrentInfoFormat
	IsAllDie: number
}
class HttpExitStoryDungeonMapNodeByForcelyCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_ExitStoryCommand{
	mainchapterid: number
	subchapterid: number
	nodeid: number
	stageid: number
}
class ResPacket_ExitStoryCommand{
	rewarditem: Element[]
	exrewarditem: Element[]
}
class HttpExitStoryCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_GetAbnormalityLogData{
	abnormalityIds: number[]
}
class ResPacket_GetAbnormalityLogData{
	logdatas: AbnormalityUnlockInformationFormat[]
	AbnormalityLogs: AbnormalityUnlockInformationFormat[]
}
class HttpGetAbnormalityLogDataCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_UpdateAbnormalityLogData{
	battlePassParameters: BattlePassParameterFormat
	abnormalityLogs: AbnormalityUnlockInformationFormat[]
}
class ResPacket_UpdateAbnormalityLogData{
	abnormalityLogs: AbnormalityUnlockInformationFormat[]
	AbnormalityLogs: AbnormalityUnlockInformationFormat[]
}
class HttpUpdateAbnormalityLogDataCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_GetStoryDungeonNodeRecord{
	dungeonid: number
}
class ResPacket_GetStoryDungeonNodeRecord{
	nodes: number[]
	Nodes: number[]
}
class HttpGetStoryDungeonNodeRecord{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_PlayGacha{
	gachaId: number
	paymentId: number
}
class ResPacket_PlayGacha{
	gachaLogDetails: GachaLogDetail[]
}
class HttpPlayGachaCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ResPacket_GetGachaLogAll{
	gachaLogs: GachaLog[]
}
class HttpGetGachaLogAllCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_UseGachaPityPoint{
	gachaId: number
	targetIdx: number
}
class ResPacket_UseGachaPityPoint{
	gachaLogDetails: GachaLogDetail[]
}
class HttpUseGachaPityPointCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ResPacket_ClaimClosedGachaRewards{
	pityPointDataList: PityPoint[]
}
class HttpUseClaimClosedGachaRewardsCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_Purchase{
	productId: string
	receipt: string
	platform: number
}
class HttpPurchaseCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_PurchaseAsGoogle{
	productId: string
	receipt: string
}
class HttpPurchaseAsGoogleCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_PurchaseAsApple{
	productId: string
	receipt: string
}
class HttpPurchaseAsAppleCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_InitPurchaseAsSteam{
	productId: string
	steamId: string
	language: string
	productDesc: string
}
class HttpInitPurchaseAsSteamCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_FinalizePurchaseAsSteam{
	orderId: string
}
class HttpFinalizePurchaseAsSteamCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_InitPurchase{
	productId: string
}
class ResPacket_InitPurchase{
	resultState: string
	IsPurchasable: boolean
}
class HttpInitPurchaseCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class HttpUpdateSteamPendingPurchaseCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_UseItem{
	itemId: number
	usage: number
	targetIdx: number
	target: Element
}
class ResPacket_UseItem{
	pickedUpElementList: Element[]
	resultElementList: Element[]
}
class HttpUseItemCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_PurchaseEnkephalinModule{
	num: number
}
class HttpPurchaseEnkephalinModuleCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_PurchaseEnkephalin{
	num: number
}
class HttpPurchaseEnkephalinCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_PersonalityGacksung{
	personalityId: number
}
class HttpPersonalityGacksungCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_SetPersonalityGacksungIllust{
	personalityId: number
	type: number
}
class HttpSetPersonalityGacksungIllustCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_EgoGacksung{
	egoId: number
}
class HttpEgoGacksungCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_UsePersonalityExpItem{
	targetPersonalityId: number
	items: ItemFormat[]
}
class ResPacket_UsePersonalityExpItem{
	resultPersonality: PersonalityFormat
}
class HttpUsePersonalityExpItemCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_LoadUserDataAll{
}
class ResPacket_LoadUserDataAll{
	secession_Date: string
	_secessionDate: DateUtil
	profile: UserPublicProfileWithSupportersFormat
	isExistReceiveFriendRequest: boolean
	danteNoteTodayPage: number
	dailyLoginRewardStates: DailyLoginRewardStateFormat[]
	dailyLoginWeekId: number
	dailyLoginId: number
	showedWeekByMinistory: number
	date: string
	IsExistReceiveFriendRequest: boolean
	SecessionDate: DateUtil
}
class HttpLoadUserDataAllCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ResPacket_CheckSeasonLog{
	seasonLog: SeasonLogFormat
}
class SeasonLogFormat{
	seasonTo: number
	seasonFrom: number
	unreceivedBattlePassRewards: Element[]
	lostPieces: ItemFormat[]
	acquiredFromLostPieces: ItemFormat[]
	lostPackages: ItemFormat[]
	acquiredFromLostPackages: ItemFormat[]
	date: string
}
class HttpCheckSeasonLogCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class HttpConfirmedSeasonLogCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_LobbyCgCommand{
	lobbyCg: LobbyCgFormat
}
class HttpLobbyCgCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_SignInAsGuest{
	guestId: bigint
	authToken: string
	version: string
	deviceModel: string
}
class ResPacket_SignInAsGuest{
	userAuth: UserAuthFormat
}
class HttpSignInAsGuestCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_SignInAsNewGuest{
	deviceModel: string
}
class ResPacket_SignInAsNewGuest{
	userAuth: UserAuthFormat
	authToken: string
}
class HttpSignInAsNewGuestCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_SignInAsGoogle{
	googleToken: string
	version: string
	deviceModel: string
}
class ResPacket_SignInAsGoogle{
	userAuth: UserAuthFormat
	accountInfo: AccountInfoFormat
}
class HttpSignInAsGoogleCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_LinkWithGoogle{
	googleToken: string
	version: string
}
class ResPacket_LinkWithGoogle{
	userAuth: UserAuthFormat
	accountInfo: AccountInfoFormat
}
class HttpLinkWithGoogleCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_SignInAsApple{
	appleToken: string
	version: string
	deviceModel: string
}
class ResPacket_SignInAsApple{
	userAuth: UserAuthFormat
	accountInfo: AccountInfoFormat
}
class HttpSignInAsAppleCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_LinkWithApple{
	appleToken: string
	version: string
}
class ResPacket_LinkWithApple{
	userAuth: UserAuthFormat
	accountInfo: AccountInfoFormat
}
class HttpLinkWithAppleCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_SignInAsSteam{
	steamToken: string
	version: string
	deviceModel: string
}
class ResPacket_SignInAsSteam{
	userAuth: UserAuthFormat
	accountInfo: AccountInfoFormat
	walletCurrency: string
}
class HttpSignInAsSteamCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class LinkDetails{
	level: number
	lunacy: number
	enkBox: number
	enkModule: number
}
class LinkAuthState{
}
class ReqPacket_RefreshLinkAuth{
	details: string
}
class ResPacket_RefreshLinkAuth{
	linkAuth: LinkAuthFormat
	state: string
}
class HttpRefreshLinkAuthCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_GetInfoOfLinkWith{
	targetPublicId: string
	password: string
}
class ResPacket_GetInfoOfLinkWith{
	details: string
	state: string
}
class HttpGetInfoOfLinkWithCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_LinkWithAnother{
	targetPublicId: string
	password: string
	mainIsTarget: boolean
}
class ResPacket_LinkWithAnother{
	state: string
}
class HttpLinkWithAnotherCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ResPacket_TryToSecede{
	secessionDate: string
	_secessionDate: DateUtil
	SecessionDate: DateUtil
}
class HttpTryToSecedeCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class HttpCancelSecessionCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class HttpCheckClientVersionCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ResPacket_RefreshMailbox{
	initializedMailList: MailFormat[]
}
class HttpRefreshMailboxCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_UnsealMails{
	mailIds: number[]
}
class ResPacket_UnsealMails{
	attachedElements: Element[]
}
class HttpUnsealMailsCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ResPacket_GetMailLogAll{
	mailLogs: MailLog[]
}
class HttpGetMailLogAllCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_SaveMiniStoryWeek{
	weekId: number
}
class HttpSaveMiniStoryWeekCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_MirrorDungeonCommon{
	isOrigin: number
}
class ResPacket_GetMirrorDungeonSaveInfoAll{
	originSaveInfo: MirrorDungeonSaveInfoFormat
	simulationsaveInfo: MirrorDungeonSaveInfoFormat
}
class HttpGetMirrorDungeonSaveInfoAllInfoCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ResPacket_GetMirrorDungeonSaveInfo{
	saveInfo: MirrorDungeonSaveInfoFormat
}
class HttpGetMirrorDungeonSaveInfoCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_EnterMirrorDungeonCommand{
	dungeonid: number
	idx: number
}
class ResPacket_EnterMirrorDungeonCommand{
	saveInfo: MirrorDungeonSaveInfoFormat
	recentCharacterList: MirrorDungeonGetCharacterInfoFormat[]
	SaveInfo: MirrorDungeonSaveInfoFormat
	RecentCharacterList: MirrorDungeonGetCharacterInfoFormat[]
}
class HttpEnterMirrorDungeonCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_ReEnterMirrorDungeonCommand{
	dungeonid: number
	idx: number
}
class ResPacket_ReEnterMirrorDungeonCommand{
	saveInfo: MirrorDungeonSaveInfoFormat
	SaveInfo: MirrorDungeonSaveInfoFormat
}
class HttpReEnterMirrorDungeonCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_UpdateMirrorDungeonCommand{
	characterInfos: MirrorDungeonGetCharacterInfoFormat[]
	formation: MirrorDungeonFormationFormat[]
	map: RandomDungeonMapFormat
	choiceEventList: number[]
	isRandomPick: number
}
class ResPacket_UpdateMirrorDungeonCommand{
	saveInfo: MirrorDungeonSaveInfoFormat
	SaveInfo: MirrorDungeonSaveInfoFormat
}
class HttpUpdateMirrorDungeonCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ResPacket_ExitMirrorDungeonCommand{
	isEndDungeon: number
	isclear: number
	acquiredChip: number
	statistics: DungeonStatisticsDataFormat[]
	IsClear: boolean
	Statistics: DungeonStatisticsDataFormat[]
}
class HttpExitMirrorDungeonCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_GetMirrorDungeonLastReward{
	useEnkephalinModule: number
	usehardbonus: number
	useweeklybonus: number
}
class ResPacket_GetMirrorDungeonLastReward{
	rewardlist: Element[]
	saveInfo: MirrorDungeonSaveInfoFormat
	chip: number
	SaveInfo: MirrorDungeonSaveInfoFormat
	Chip: number
}
class HttpGetMirrorDungeonLastRewardCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_EnterMirrorDungeonMapNodeCommand{
	currentnode: DungeonMapNodeFormat
	abnormalityids: number[]
	participatedPIds: number[]
}
class ResPacket_EnterMirrorDungeonMapNodeCommand{
	abnormalityLogs: AbnormalityUnlockInformationFormat[]
	passingNodeIds: number[]
	currentNode: DungeonMapNodeFormat
	shopInfo: UserMirrorDungeonShopDataFormat
	egogifts: DungeonMapEgoGiftFormat[]
	prevdul: MirrorDungeonPrevUnitInfoFormat[]
	preves: number[]
	AbnormalityLogs: AbnormalityUnlockInformationFormat[]
	PassingNodeIds: number[]
	CurrentNode: DungeonMapNodeFormat
	ShopInfo: UserMirrorDungeonShopDataFormat
	Egogifts: DungeonMapEgoGiftFormat[]
	PrevDul: MirrorDungeonPrevUnitInfoFormat[]
	PrevEgos: number[]
}
class HttpEnterMirrorDungeonMapNodeCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_UpdateMirrorDungeonMapNodeCommand{
	currentnode: DungeonMapNodeFormat
	choiceEventData: DungeonChoiceEventSaveDataFormat
	dungeonUnitList: MirrorDungeonSaveUnitInfoFormat[]
	updatedEgoGifts: DungeonMapEgoGiftFormat[]
}
class ResPacket_UpdateMirrorDungeonMapNodeCommand{
	prevChoiceEvent: DungeonChoiceEventSaveDataFormat[]
	currentEgoGifts: DungeonMapEgoGiftFormat[]
	PrevChoiceEvent: DungeonChoiceEventSaveDataFormat[]
	CurrentEgoGifts: DungeonMapEgoGiftFormat[]
}
class HttpUpdateMirrorDungeonMapNodeCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_EnterMirrordungeonMapNodeBattleAfterChoice{
	participatedPids: number[]
	abnormalityids: number[]
	dungeonUnitList: MirrorDungeonSaveUnitInfoFormat[]
}
class ResPacket_EnterMirrordungeonMapNodeBattleAfterChoice{
	abnormalityLogs: AbnormalityUnlockInformationFormat[]
	AbnormalityLogs: AbnormalityUnlockInformationFormat[]
}
class HttpEnterMirrordungeonMapNodeBattleAfterChoice{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_ExitMirrorDungeonMapNodeCommand{
	currentnode: DungeonMapNodeFormat
	dungeonunitlist: MirrorDungeonSaveUnitInfoFormat[]
	noderesult: number
	choiceEventData: DungeonChoiceEventSaveDataFormat
	battlePassParameters: BattlePassParameterFormat
	abnormalityLogs: AbnormalityUnlockInformationFormat[]
	isupdatedEgoSkillStock: number
	egoSkillStockList: DungeonEgoSkillStockFormat[]
	updatedEgoGifts: DungeonMapEgoGiftFormat[]
	statistics: DungeonStatisticsDataFormat[]
}
class ResPacket_ExitMirrorDungeonMapNodeCommand{
	currentInfo: MirrorDungeonCurrentInfoFormat
	abnormalityLogs: AbnormalityUnlockInformationFormat[]
	CurrentInfo: MirrorDungeonCurrentInfoFormat
	AbnormalityLogs: AbnormalityUnlockInformationFormat[]
}
class HttpExitMirrorDungeonMapNodeCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_UpdateMirrordungeonUnits{
	dungeonunitlist: MirrorDungeonSaveUnitInfoFormat[]
}
class HttpUpdateMirrordungeonUnitsCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ResPacket_ExitMirrorDungeonMapNodeByForcely{
	currentInfo: MirrorDungeonCurrentInfoFormat
	CurrentInfo: MirrorDungeonCurrentInfoFormat
}
class HttpExitMirrorDungeonMapNodeByForcelyCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_AcquireEgoGiftEventMirrorDungeonCommand{
	selectIndexList: number[]
}
class ResPacket_AcquireEgoGiftEventMirrorDungeonCommand{
	egoGifts: DungeonMapEgoGiftFormat[]
	remainRewardEvent: RandomDungeonEncounterRewardEventInfoFormat[]
	EgoGifts: DungeonMapEgoGiftFormat[]
	RemainRewardEvent: RandomDungeonEncounterRewardEventInfoFormat[]
}
class HttpAcquireEgoGiftEventDataDungeonCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ResPacket_RejectRewardEgoGiftsMirrorDungeonCommand{
	remainRewardEvent: RandomDungeonEncounterRewardEventInfoFormat[]
	RemainRewardEvent: RandomDungeonEncounterRewardEventInfoFormat[]
}
class HttprejectRewardEgoGiftsMirrorDungeonCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_AcquireCharacterEventDataMirrorDungeonCommand{
	acquirePersonalities: MirrorDungeonGetCharacterInfoFormat[]
}
class ResPacket_AcquireCharacterEventDataMirrorDungeonCommand{
	dungeonUnitList: MirrorDungeonSaveUnitInfoFormat[]
	remainRewardEvent: RandomDungeonEncounterRewardEventInfoFormat[]
	DungeonUnitList: MirrorDungeonSaveUnitInfoFormat[]
	RemainRewardEvent: RandomDungeonEncounterRewardEventInfoFormat[]
}
class HttpAcquireCharacterEventMirrorDungeonCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_PersonalityLevelUpEventMirrorDungeonCommand{
	levelUpPersonalityFormat: RandomDungeonLevelUpPersonalityInfoFormat
}
class ResPacket_PersonalityLevelUpEventMirrorDungeonCommand{
	dungeonUnitList: MirrorDungeonSaveUnitInfoFormat[]
	remainRewardEvent: RandomDungeonEncounterRewardEventInfoFormat[]
	DungeonUnitList: MirrorDungeonSaveUnitInfoFormat[]
	RemainRewardEvent: RandomDungeonEncounterRewardEventInfoFormat[]
}
class HttpLevelUpPersonalityEventDataDungeonCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_GetMirrorDungeonEgoGiftRecordCommand{
	dungeonId: number
}
class ResPacket_GetMirrorDungeonEgoGiftRecordCommand{
	dungeonId: number
	acquiredegogifts: number[]
}
class HttpGetMirrorDungeonEgoGiftRecordCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_UnLockMirrorDungeonEgoGiftCommand{
	egogiftIds: number[]
}
class HttpUnLockMirrorDungeonEgoGiftCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class MIRROR_DUNGEON_ERROR_NUMBER{
}
class ReqPacket_SendMirrorDungeonLogErrorCommand{
	type: number
}
class HttpSendMirrorDungeonLogErrorCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_SendMirrorDungeonIndex{
	index: number
}
class ReqPacket_SendMirrorDungeonId{
	id: number
}
class HttpSendMirrorDungeonShopExitCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_PurchaseMirrordungeonHeal{
	idx: number
	pid: number
}
class ResPacket_PurchaseMirrordungeonHeal{
	cost: number
	dungeonUnitList: MirrorDungeonSaveUnitInfoFormat[]
	shopInfo: UserMirrorDungeonShopDataFormat
	Cost: number
	DungeonUnitList: MirrorDungeonSaveUnitInfoFormat[]
	ShopInfo: UserMirrorDungeonShopDataFormat
}
class HttpSendPurchaseMirrordungeonHealCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_PurchaseFormation{
	formation: MirrorDungeonFormationFormat[]
}
class ResPacket_PurchaseFormation{
	cost: number
	dungeonUnitList: MirrorDungeonSaveUnitInfoFormat[]
	shopInfo: UserMirrorDungeonShopDataFormat
	Cost: number
	DungeonUnitList: MirrorDungeonSaveUnitInfoFormat[]
	ShopInfo: UserMirrorDungeonShopDataFormat
}
class HttpSendPurchaseFormationCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_PurchaseUpgradePersonality{
	idx: number
}
class ResPacket_PurchaseUpgradePersonality{
	cost: number
	dungeonUnitList: MirrorDungeonSaveUnitInfoFormat[]
	shopInfo: UserMirrorDungeonShopDataFormat
	Cost: number
	DungeonUnitList: MirrorDungeonSaveUnitInfoFormat[]
	ShopInfo: UserMirrorDungeonShopDataFormat
}
class HttpSendPurchaseUpgradePersonalityCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_PurchaseEgoGift{
	idx: number
}
class ResPacket_PurchaseEgoGift{
	cost: number
	egogifts: DungeonMapEgoGiftFormat[]
	shopInfo: UserMirrorDungeonShopDataFormat
	Cost: number
	Egogifts: DungeonMapEgoGiftFormat[]
	ShopInfo: UserMirrorDungeonShopDataFormat
}
class HttpSendPurchaseEgoGiftCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_GetStartBuffFInfo{
	dungeonid: number
}
class ResPacket_GetStartBuffFInfo{
	startBuffInfo: MirrorDungeonStartBuffInfoFormat
}
class HttpGetStartBuffFInfoCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_PurchaseStartBuff{
	dungeonid: number
	buffid: number
}
class ResPacket_PurchaseStartBuff{
	startBuffInfo: MirrorDungeonStartBuffInfoFormat
}
class HttpPurchaseStartBuffCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_RemoveMirrorDungeonEgoGift{
	egogiftId: number
}
class ResPacket_RemoveMirrorDungeonEgoGift{
	egs: DungeonMapEgoGiftFormat[]
	EgoGifts: DungeonMapEgoGiftFormat[]
}
class HttpRemoveMirrorDungeonEgoGiftCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ResPacket_MirrorDungeonGiveUpSelectingEgoGift{
	remainRewardEvent: RandomDungeonEncounterRewardEventInfoFormat[]
	RemainRewardEvent: RandomDungeonEncounterRewardEventInfoFormat[]
}
class HttpMirrorDungeonGiveUpSelectingEgoGiftCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_GetMirrorDungeonPreset{
	dungeonid: number
	idx: number
}
class ResPacket_GetMirrorDungeonPreset{
	recentCharacterList: MirrorDungeonFormationFormat[]
	RecentCharacterList: MirrorDungeonFormationFormat[]
}
class HttpGetMirrorDungeonPresetCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ResPacket_GetMirrorDungeonRewardChip{
	chip: number
	Chip: number
}
class HttpGetMirrorDungeonRewardChipCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_SelectMirrorDungeonRandomPickFormation{
	dungeonid: number
	idx: number
}
class ResPacket_SelectMirrorDungeonRandomPickFormation{
	formation: MirrorDungeonFormationFormat[]
	Formation: MirrorDungeonFormationFormat[]
}
class HttpSelectMirrorDungeonRandomPickFormationCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_ReportError{
	errorCode: string
	url: string
	requestJson: string
	message: string
}
class HttpReportErrorCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class API_CLASS{
}

class ResPacket_GetTheaterInfo{
	theaterInfo: UserTheaterInfoFormat
}
class HttpGetTheaterInfoCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_CompleteTheaterStory{
	storyId: string
}
class ResPacket_CompleteTheaterStory{
	isRewarded: boolean
	theaterInfo: UserTheaterInfoFormat
}
class HttpCompleteTheaterStoryCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_UpdateFormationCommand{
	formation: FormationFormat
}
class HttpUpdateFormationCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ResPacket_GetUserBanners{
	banners: UserBannerDataFormat[]
}
class HttpGetUserBannersCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ResPacket_GetFriendsData{
	friendprofileList: UserPublicProfileFormat[]
	sendprofileList: UserPublicProfileFormat[]
	receiveprofileList: UserPublicProfileFormat[]
}
class HttpGetUserFriendsDataCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_FindFriend{
	publicUID: string
}
class ResPacket_FindFriend{
	success: boolean
	friendprofile: UserPublicProfileFormat
}
class HttpFindFriendCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ResPacket_GetRecommendFriends{
	recomendedFriends: UserPublicProfileFormat[]
}
class HttpGetRecommendFriendsCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_SendFriendRequest{
	receiverPublicUID: string
}
class ResPacket_SendFriendRequest{
	success: number
	receiverprofile: UserPublicProfileFormat
}
class HttpSendFriendRequestCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_AcceptReceivedFriendRequest{
	senderPublicUID: string
}
class ResPacket_AcceptReceivedFriendRequest{
	success: number
}
class HttpAcceptReceivedFriendRequestCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_RejectReceivedFriendRequest{
	senderPublicUID: string
}
class HttpRejectReceivedFriendRequestCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_CancelSentFriendRequest{
	receivedPublicUID: string
}
class HttpCancelSentFriendRequestCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_DeleteFriend{
	deletedPublicUID: string
}
class HttpDeleteFriendCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_GetFriendSupportPersonalities{
	publicUID: string
}
class ResPacket_GetFriendSupportPersonalities{
	supportpersonalities: SupportPersonalitySlotFormat[]
}
class HttpGetFriendSupportPersonalitiesCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_GetFriendSupportPersonalitiesByCharacterId{
	characterid: number
}
class ResPacket_GetFriendSupportPersonalitiesByCharacterId{
	supportpersonalities: SupportPersonalityFormat[]
}
class HttpGetFriendSupportPersonalitiesByCharacterIdCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_UpdateUserProfile{
	illustId: number
	illustGacksungLevel: number
	sentenceId: number
	wordId: number
	banners: UserPublicBannerFormat[]
	supportPersonalities: SupportPersonalitySlotFormat[]
}
class HttpUpdateUserProfileCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ResPacket_GetProfileTicketDecoDatas{
	leftBorders: UserProfileBorderFormat[]
	rightBorders: UserProfileBorderFormat[]
	egoBackgrounds: UserProfileEgobackgroundFormat[]
}
class HttpGetProfileTicketDecoDatasCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_UpdateProfileTicketDeco{
	leftBorderId: number
	rightBorderId: number
	egoBackgroundId: number
}
class ResPacket_UpdateProfileTicketDeco{
	leftBorderId: number
	rightBorderId: number
	egoBackgroundId: number
}
class HttpUpdateProfileTicketDecoCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_PlayVendingMachine{
	vendingMachineId: number
	targetType: string
	targetId: number
	coupons: number[]
}
class ResPacket_PlayVendingMachine{
	itemConsumptions: ItemFormat[]
}
class HttpPlayVendingMachineCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_ExchangeTwine{
	paidPieces: ItemFormat[]
}
class HttpExchangeTwineCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class HttpApiSchema{
	_url: string
	_requestJson: string
	_responseEvent: DelegateEventString
	isReported: boolean
	_requestDate: DateUtil
	URL: string
	RequestJson: string
	ResponseEvent: DelegateEventString
	IsReported: boolean
	RequestDate: DateUtil
}

class IRequestPacket{
}
class ReqPacket_NULL{
}
class IResponsePacket{
}
class ResPacket_NULL{
}

class ServerUserAuth{
	uid: bigint
	dbid: number
	authCode: string
	version: string
	synchronousDataVersion: number
}
class ServerInfo{
	version: string
}
class UpdatedFormat{
	isInitialized: boolean
	userInfo: UserInfo
	personalityList: PersonalityFormat[]
	egoList: EgoFormat[]
	formationList: FormationFormat[]
	lobbyCG: LobbyCgFormat
	itemList: ItemFormat[]
	chanceList: ChanceFormat[]
	battlePass: BattlePassFormat
	mainChapterStateList: MainChapterStateFormat[]
	mailList: MailFormat[]
	announcer: AnnouncerFormat
	membershipList: MembershipFormat[]
	gachaList: GachaRecordFormat[]
	isUpdateUserBanner: boolean
	isResetMirrorDungeon: boolean
	IsInitialized: boolean
	UserInfo: UserInfo
	PersonalityList: PersonalityFormat[]
	EgoList: EgoFormat[]
	FormationList: FormationFormat[]
	LobbyCG: LobbyCgFormat
	ItemList: ItemFormat[]
	ChanceList: ChanceFormat[]
	BattlePass: BattlePassFormat
	MainChapterStateList: MainChapterStateFormat[]
	MailList: MailFormat[]
	Announcer: AnnouncerFormat
	MembershipList: MembershipFormat[]
	GachaList: GachaRecordFormat[]
	IsUpdateUserBanner: boolean
	IsResetMirrorDungeon: boolean
}
class SynchronizedFormat{
	version: number
	noticeList: NoticeFormat[]
	mailContentList: MailContentFormat[]
}
class MailContentFormat{
	id: number
	version: number
	senderSprName: string
	content_KR: string
	sender_KR: string
	content_EN: string
	sender_EN: string
	content_JP: string
	sender_JP: string
}
class NoticeFormat{
	id: number
	version: number
	type: number
	startDate: string
	endDate: string
	sprNameList: String[]
	title_KR: string
	content_KR: string
	title_EN: string
	content_EN: string
	title_JP: string
	content_JP: string
}
class ContentFormat{
	formatKey: string
	formatValue: string
}
class ContentList{
	list: ContentFormat[]
}
class PriceTierFormat{
	tier: number
	version: number
	USD_cent: number
	KRW: number
	JPY: number
}
class UserBannerDataFormat{
	id: number
	acquiretime: string
	value: number
}
class DUNGEON_NODERESULT{
}
class DungeonMapNodeFormat{
	f: number
	s: number
	nid: number
}
class DungeonMapEgoGiftFormat{
	id: number
	pids: number[]
	un: number
}
class DungeonEgoFormat{
	id: number
	g: number
	idx: number
}
class DungeonSaveUnitInfoFormat{
	pid: number
	ch: number
	cm: number
	mhos: number
	g: number
	l: number
	es: DungeonEgoFormat[]
	isp: number
}
class DungeonCurrentInfoFormat{
	cn: DungeonMapNodeFormat
	egs: DungeonMapEgoGiftFormat[]
	pnids: number[]
	nr: number
	pce: DungeonChoiceEventSaveDataFormat[]
	ess: DungeonEgoSkillStockFormat[]
	dn: number
}
class DungeonStatisticsDataFormat{
	id: number
	gd: number
	rd: number
}
class DungeonChoiceEventSaveDataFormat{
	sl: number[]
	cs: number
	ri: number
}
class DungeonEgoSkillStockFormat{
	t: string
	n: number
}
class StoryDungeonSaveInfoFormat{
	dungeonid: number
	currentinfo: StoryDungeonCurrentInfoFormat
}
class StoryDungeonCurrentInfoFormat{
	dul: StoryDungeonSaveUnitInfoFormat[]
	scpn: DungeonMapNodeFormat
	scpegl: DungeonMapEgoGiftFormat[]
	opn: number[]
}
class StoryDungeonSaveUnitInfoFormat{
	sp: number
	gi: number
}
class UserPublicProfileFormat{
	public_uid: string
	illust_id: number
	illust_gacksung_level: number
	leftborder_id: number
	rightborder_id: number
	egobackground_id: number
	sentence_id: number
	word_id: number
	banners: UserPublicBannerFormat[]
	level: number
	date: string
}
class UserPublicBannerFormat{
	id: number
	value: number
	idx: number
}
class UserPublicProfileWithSupportersFormat{
	support_personalities: SupportPersonalitySlotFormat[]
}
class BattlePassParameterFormat{
	enemyKillCount: number
	abnormalityKillCount: number
	isUsedDailyChar: boolean
	isUsedSeasonEgo: boolean
	isUsedSeasonAnnouncer: boolean
}
class StageNormalReqResultFormat{
	mainchapterid: number
	subchapterid: number
	nodeid: number
	stageid: number
	iswin: boolean
	turn: number
	formationid: number
	supportCharacterId: number
	supportPersonalityId: number
	supportEgoIds: number[]
	supportParticipate: boolean
	battlePassParameters: BattlePassParameterFormat
	abnormalityLogs: AbnormalityUnlockInformationFormat[]
}
class StageDungeonReqResultFormat{
	mainchapterid: number
	subchapterid: number
	nodeid: number
	stageid: number
}
class StageStoryReqResultFormat{
	mainchapterid: number
	subchapterid: number
	nodeid: number
	stageid: number
}
class StagePersonalityInfoFormat{
	personalityid: number
	prevlevel: number
	totaladdexp: number
}
class MainChapterStateFormat{
	id: number
	subcss: SubChapterStateFormat[]
}
class SubChapterStateFormat{
	id: number
	nss: NodeStateFormat[]
	rss: number[]
}
class NodeStateFormat{
	id: number
	ct: number
	cn: number
	dn: number
}
class StageNodeFormat{
	nodeid: number
}
class MirrorDungeonSaveInfoFormat{
	dungeonId: number
	idx: number
	currentInfo: MirrorDungeonCurrentInfoFormat
	dungeonMap: RandomDungeonMapFormat
	choiceEventList: number[]
	addUserExp: number
	statistics: DungeonStatisticsDataFormat[]
	encounterstatistics: number[]
	isEndDungeon: number
	isReset: number
	availableweeklychance: number
	availablehardrewardchance: number
	version: number
}
class MirrorDungeonCurrentInfoFormat{
	eid: number
	dul: MirrorDungeonSaveUnitInfoFormat[]
	rre: RandomDungeonEncounterRewardEventInfoFormat[]
	ri: number
	cost: number
	shop: UserMirrorDungeonShopDataFormat
	prevdul: MirrorDungeonPrevUnitInfoFormat[]
	preves: number[]
}
class MirrorDungeonSaveUnitInfoFormat{
	upidx: number[]
}
class MirrorDungeonPrevUnitInfoFormat{
	pid: number
	ch: number
	cm: number
	upidx: number[]
}
class RandomDungeonMapFormat{
	ns: RandomDungeonMapNodeFormatForMapFormat[]
}
class RandomDungeonMapNodeFormatForMapFormat{
	f: number
	s: number
	nid: number
	e: number
	eid: number
	nnids: number[]
}
class MirrorDungeonGetCharacterInfoFormat{
	pid: number
	egos: DungeonEgoFormat[]
}
class RandomDungeonLevelUpPersonalityInfoFormat{
	pid: number
	ego: DungeonEgoFormat
}
class HellsChickenDungeonLevelUpPersonalityInfoFormat{
	pid: number
	egos: DungeonEgoFormat[]
}
class RandomDungeonEncounterRewardEventInfoFormat{
	rt: string
	se: number
	sh: number
	pool: number[]
}
class MirrorDungeonFormationFormat{
	pervPersonalityId: number
	nextPersonalityId: number
	egos: MirrorDungeonFormationEgoFormat[]
}
class MirrorDungeonFormationEgoFormat{
	prevEgoId: number
	nextEgoId: number
}
class MirrorDungeonStartBuffInfoFormat{
	dungeonid: number
	bufstate: number[]
	chip: number
}
class MirrorDungeonClearInfoFormat{
	dungeonid: number
	idx: number
	clearnumber: number
	defeatnumber: number
}
class ReqPacket_EnterRailwayDungeon{
	dungeonId: number
	personalities: RailwayUnitInfoFormat[]
}
class ResPacket_EnterRailwayDungeon{
	saveInfo: RailwayDungeonSaveInfoFormat
	SaveInfo: RailwayDungeonSaveInfoFormat
}
class HttpEnterRailwayDungeonCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_EnterRailwayDungeonMapNodeCommand{
	dungeonId: number
	nodeid: number
	abnormalityids: number[]
	participatedPIds: number[]
}
class ResPacket_EnterRailwayDungeonMapNodeCommand{
	nodeid: number
	deletedNodeIds: number[]
	abnormalityLogs: AbnormalityUnlockInformationFormat[]
	prevStatusData: RailwayUnitStatusFormat[]
	prevEgoStockData: RailwayEGOStockFormat[]
	NodeId: number
	NewCurrentClearNodeId: number
	DeletedNodeIds: number[]
	AbnormalityLogs: AbnormalityUnlockInformationFormat[]
	PrevStatusData: RailwayUnitStatusFormat[]
	PrevEgoStockData: RailwayEGOStockFormat[]
}
class HttpEnterRailwayDungeonMapNodeCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_GetRailwayDungeonNodeAndLogAllCommand{
	dungeonId: number
}
class ResPacket_GetRailwayDungeonNodeAndLogAllCommand{
	nodeDatas: RailwayNodeDataFormat[]
	logDatas: RailwayLogDataFormat[]
}
class HttpGetRailwayDungeonNodeAndLogAllCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_ExitRailwayDungeonMapNodeCommand{
	dungeonId: number
	nodeid: number
	unitStatusList: RailwayUnitStatusFormat[]
	egoSkillStockList: RailwayEGOStockFormat[]
	battlePassParameters: BattlePassParameterFormat
	abnormalityLogs: AbnormalityUnlockInformationFormat[]
	statistics: RailwayStatisticsDataFormat[]
	clearTurn: number
}
class ResPacket_ExitRailwayDungeonMapNodeCommand{
	saveInfo: RailwayDungeonSaveInfoFormat
	abnormalityLogs: AbnormalityUnlockInformationFormat[]
	nodeData: RailwayNodeDataFormat
	SaveInfo: RailwayDungeonSaveInfoFormat
	AbnormalityLogs: AbnormalityUnlockInformationFormat[]
	NodeData: RailwayNodeDataFormat
}
class HttpExitRailwayDungeonMapNodeCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_ExitRailwayDungeonCommand{
	dungeonId: number
	isClear: boolean
}
class ResPacket_ExitRailwayDungeonCommand{
	isclear: boolean
	saveInfo: RailwayDungeonSaveInfoFormat
	currentLog: RailwayLogDataFormat
	rewards: Element[]
	IsClear: boolean
	SaveInfo: RailwayDungeonSaveInfoFormat
	CurrentLog: RailwayLogDataFormat
	Rewards: Element[]
}
class HttpExitRailwayDungeonCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class ReqPacket_AcquireRailwayDungeonReward{
	dungeonId: number
}
class ResPacket_AcquireRailwayDungeonReward{
	saveInfo: RailwayDungeonSaveInfoFormat
	rewardList: Element[]
	SaveInfo: RailwayDungeonSaveInfoFormat
	RewardList: Element[]
}
class HttpAcquireRailwayDungeonRewardCommand{
	_apiClass: API_CLASS
	_apiPath: string
}
class RailwayDungeonSaveInfoFormat{
	id: number
	currentclearnode: number
	lastclearnode: number
	personalities: RailwayUnitInfoFormat[]
	payreward: number
	rewardstate: number
	firstcleardate: DateUtil
	IsPayReward: boolean
}
class RailwayNodeDataFormat{
	nodeid: number
	egostocks: RailwayEGOStockFormat[]
	status: RailwayUnitStatusFormat[]
	clearturn: number
	statistics: RailwayStatisticsDataFormat[]
}
class RailwayUnitInfoFormat{
	pid: number
	g: number
	l: number
	es: DungeonEgoFormat[]
	sp: number
	gi: number
	IsFriendSupport: boolean
	IsGacksungIllust: boolean
}
class RailwayUnitStatusFormat{
	pid: number
	hp: number
	mp: number
	isp: number
	IsParticipated: boolean
}
class RailwayEGOStockFormat{
	t: string
	n: number
}
class RailwayStatisticsDataFormat{
	id: number
	gd: number
	rd: number
}
class RailwayLogDataFormat{
	idx: number
	personalities: RailwayUnitInfoFormat[]
	statistics: RailwayStatisticsDataFormat[]
	clearturn: number
	turnspernode: RailwayTurnsPerNode[]
	date: string
	deadunitnumber: number
}
class RailwayTurnsPerNode{
	nid: number
	turn: number
}
class AnnouncerFormat{
	announcer_ids: number[]
	cur_announcer_ids: number[]
}
class UserAuthFormat{
	uid: bigint
	public_id: bigint
	db_id: number
	auth_code: string
	last_login_date: string
	last_update_date: string
	data_version: number
}
class LinkAuthFormat{
	public_id: bigint
	password: string
	expiry_date: string
	details: string
}
class LinkAuthData{
	_publicId: string
	_password: string
	_expiry_date: DateUtil
}
class AccountInfoFormat{
	uid: bigint
	google_account: string
	apple_account: string
	steam_account: string
}
class AccountInfo{
	googleAccount: string
	appleAccount: string
	steamAccount: string
	GoogleAccount: string
	AppleAccount: string
	SteamAccount: string
}
class BattlePassFormat{
	is_limbus: boolean
	level: number
	exp: number
	today_rand_value: number
	ex_reward_level: number
	limbus_apply_level: number
	rewards_state: number[]
	missions_state: BattlePassMissionState[]
}
class ChanceFormat{
	id: number
	value: number
}
class EgoFormat{
	ego_id: number
	gacksung: number
	acquire_time: string
}
class EgoContainIndexFormat{
	index: number
}
class FormationFormat{
	id: number
	formationDetails: FormationDetailFormat[]
}
class FormationDetailFormat{
	personalityId: number
	egos: number[]
	isParticipated: boolean
	participationOrder: number
}
class GachaRecordFormat{
	gachaId: number
	pityPoint: number
}
class HellsChickenDungeonSaveInfoFormat{
	dungeonid: number
	currentinfo: HellsChickenDungeonCurrentInfoFormat
	map: RandomDungeonMapFormat
	choiceeventlist: number[]
	statistics: DungeonStatisticsDataFormat[]
}
class HellsChickenDungeonCurrentInfoFormat{
	cn: DungeonMapNodeFormat
	egs: DungeonMapEgoGiftFormat[]
	pnids: number[]
	nr: number
	pce: DungeonChoiceEventSaveDataFormat[]
	ess: DungeonEgoSkillStockFormat[]
	eid: number
	dul: HellsChickenDungeonSaveUnitInfoFormat[]
	rre: RandomDungeonEncounterRewardEventInfoFormat[]
}
class HellsChickenDungeonSaveUnitInfoFormat{
	grade: number
}
class HellsChickenDungeonGetCharacterInfoFormat{
	pid: number
	egos: DungeonEgoFormat[]
	sp: number
}
class HellsChickenDungeonGetCharacterInfoContainGacksungFormat{
	g: number
	cl: number
}
class UserInfo{
	uid: bigint
	level: number
	exp: number
	stamina: number
	last_stamina_recover: string
}
class ItemFormat{
	item_id: number
	num: number
}
class LobbyCgFormat{
	characterId: number
	lobbycgdetails: LobbyCgDetailFormat[]
}
class LobbyCgDetailFormat{
	id: number
	g: number
}
class MailFormat{
	mail_id: number
	sent_date: string
	expiry_date: string
	content_id: number
	attachments: Element[]
	parameters: String[]
}
class MembershipFormat{
	iap_id: number
	expiry_date: string
}
class PersonalityFormat{
	personality_id: number
	level: number
	exp: number
	gacksung: number
	order_id: number
	gacksung_illust_type: number
	acquire_time: string
}
class UserProfileFormat{
	illust_id: number
	illust_gacksung_level: number
	sentence_id: number
	word_id: number
	banner_ids: number[]
	support_personalities: SupportPersonalityFormat[]
	leftborder: number
	rightborder: number
	egobackground: number
}
class SupportPersonalityFormat{
	pid: number
	l: number
	egos: ProfileEgoContainIndexFormat[]
	gl: number
	gi: number
}
class SupportPersonalitySlotFormat{
	idx: number
}
class ProfileEgoFormat{
	id: number
	g: number
}
class ProfileEgoContainIndexFormat{
	idx: number
}
class AbnormalityKillLogFormat{
	id: number
	number: number
}
class UserTheaterInfoFormat{
	rewardedIDList: String[]
}
