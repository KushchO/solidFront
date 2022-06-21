export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  JSON: any;
};

export enum IAccountType {
  Di = 'di',
  Enabler = 'enabler',
  Legacy = 'legacy'
}

export type IAppInputParams = {
  connect_protocol?: InputMaybe<ITitleValueParams>;
  /** hello */
  database_sid?: InputMaybe<ITitleValueParams>;
  enpoint?: InputMaybe<Scalars['String']>;
  java?: InputMaybe<ITitleValueParams>;
  joindomain?: InputMaybe<ITitleValueParams>;
  min_java?: InputMaybe<ITitleValueParams>;
  name_project?: InputMaybe<IAppParamsNameProjectParams>;
  version?: InputMaybe<ITitleValueParams>;
};

export type IAppParams = {
  __typename?: 'AppParams';
  /** hello */
  database_sid?: Maybe<ITitleValue>;
  enpoint?: Maybe<Scalars['String']>;
  java?: Maybe<ITitleValue>;
  min_java?: Maybe<ITitleValue>;
  name_project?: Maybe<IAppParamsNameProject>;
  version?: Maybe<ITitleValue>;
};

export type IAppParamsNameProject = {
  __typename?: 'AppParamsNameProject';
  value: Scalars['String'];
};

export type IAppParamsNameProjectParams = {
  value: Scalars['String'];
};

export type IAppSystem = {
  __typename?: 'AppSystem';
  additional_owner_regions: Array<Maybe<Scalars['String']>>;
  code: Scalars['String'];
  created_at: Scalars['String'];
  developer_domain_id?: Maybe<Scalars['String']>;
  domain_id?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name: Scalars['String'];
  region_ids: Array<Maybe<Scalars['String']>>;
  service_type?: Maybe<Scalars['String']>;
  status: Scalars['String'];
  updated_at: Scalars['String'];
};

export type IAppSystemReturnType = {
  __typename?: 'AppSystemReturnType';
  app_systems: Array<IAppSystem>;
};

export type IAppSystemsGetParams = {
  domain_id: Scalars['String'];
  is_order: Scalars['Boolean'];
};

export enum IBannerType {
  UtilizationBlock = 'utilization_block',
  UtilizationPowerOff = 'utilization_power_off',
  UtilizationResize = 'utilization_resize',
  UtilizationWarning = 'utilization_warning'
}

export type IBusinessBlock = {
  __typename?: 'BusinessBlock';
  created_at?: Maybe<Scalars['String']>;
  domains?: Maybe<Array<Maybe<IDomain>>>;
  domains_count: Scalars['Int'];
  id: Scalars['ID'];
  name: Scalars['String'];
  updated_at?: Maybe<Scalars['String']>;
};

export type ICalculateParams = {
  attrs?: InputMaybe<ICalculateParamsAttrs>;
  type: Scalars['String'];
};

export type ICalculateParamsAttrs = {
  hpsm_stand_type: Scalars['String'];
  name: Scalars['String'];
  vms?: InputMaybe<Array<InputMaybe<ICalculateParamsAttrsServer>>>;
};

export type ICalculateParamsAttrsServer = {
  cpu: Scalars['Int'];
  hdd: ICalculateParamsAttrsServerHdd;
  ir_group: Scalars['String'];
  name: Scalars['String'];
  os_name: Scalars['String'];
  ram: Scalars['Int'];
  service_type: Scalars['String'];
  virtualization: Scalars['String'];
  volumes?: InputMaybe<Array<ICalculateParamsAttrsServerHdd>>;
};

export type ICalculateParamsAttrsServerHdd = {
  size: Scalars['Int'];
  type: Scalars['String'];
};

export type ICheckCiResult = {
  __typename?: 'CheckCiResult';
  code?: Maybe<ICheckCiResultCode>;
  message: Scalars['String'];
};

export enum ICheckCiResultCode {
  Checking = 'checking',
  Error = 'error',
  Ok = 'ok'
}

export type IChildOrdersStat = {
  __typename?: 'ChildOrdersStat';
  app?: Maybe<Scalars['Int']>;
  combine?: Maybe<Scalars['Int']>;
  compute?: Maybe<Scalars['Int']>;
  db?: Maybe<Scalars['Int']>;
  storage?: Maybe<Scalars['Int']>;
};

export type ICommon = {
  created_at: Scalars['String'];
  id: Scalars['ID'];
  updated_at: Scalars['String'];
};

export type ICompositionIr = {
  __typename?: 'CompositionIr';
  ci: Scalars['String'];
  name: Scalars['String'];
  stand_ci: Scalars['String'];
  status: Scalars['String'];
};

export type ICompositionIrReturnType = {
  __typename?: 'CompositionIrReturnType';
  composition_irs: Array<ICompositionIr>;
};

export type ICompositionIrsGetParams = {
  as_type_code: Scalars['String'];
  hpsm_stand_type: Scalars['String'];
};

export type IConfirmActionParams = {
  comment?: InputMaybe<Scalars['String']>;
  kvr_timeout?: InputMaybe<Scalars['Int']>;
};

export type IConfirmResizeApprove = {
  comment?: InputMaybe<Scalars['String']>;
  state: IVmSatate;
};

export type ICoordinatePoint = {
  __typename?: 'CoordinatePoint';
  x: Scalars['Float'];
  y: Scalars['Float'];
};

export type ICreateServerParams = {
  count: Scalars['Int'];
  server: ICreateServerParamsServer;
};

export type ICreateServerParamsServer = {
  /** Дополнительная информация */
  additional_info?: InputMaybe<Scalars['String']>;
  app_params?: InputMaybe<IAppInputParams>;
  /** Количество CPU */
  cpu?: InputMaybe<Scalars['Int']>;
  /** Размер диска ВМ, ГБ */
  disk?: InputMaybe<Scalars['Int']>;
  /** Размещение в разные ресурсные пулы */
  divide?: InputMaybe<Scalars['Boolean']>;
  /** Отказоустойчивость */
  fault_tolerance?: InputMaybe<IFaultTolerance>;
  /** Конфигурация ВМ */
  flavor?: InputMaybe<Scalars['String']>;
  /** Коды регионов для георезервирования */
  georeservice_regions?: InputMaybe<Array<Scalars['String']>>;
  /** Вкл/выкл Greenfield */
  greenfield?: InputMaybe<Scalars['Boolean']>;
  /** Идентификатор группы */
  group_id: Scalars['String'];
  /** Системный диск ВМ, ГБ */
  hdd?: InputMaybe<IServerHddSystemParams>;
  /** Вкл/выкл доступ в интернет */
  internet_access?: InputMaybe<Scalars['Boolean']>;
  /** Продукт */
  ir_group?: InputMaybe<Scalars['String']>;
  /** Логин пользователя от имени которого происходит создание продукта */
  login?: InputMaybe<Scalars['String']>;
  /** UUID Master-сервера */
  master_uuid?: InputMaybe<Scalars['String']>;
  /** суффикс NAS */
  name_suffix?: InputMaybe<Scalars['String']>;
  /** Тип оркестратора */
  orchestrator?: InputMaybe<IOrchestrator>;
  /** Доп параметры получаемые из оркестратора */
  orchestrator_params?: InputMaybe<Array<ICreateServerParamsServerOrchestratorParams>>;
  /** Название ОС */
  os_name?: InputMaybe<IOsName>;
  /** Версия ОС */
  os_version?: InputMaybe<Scalars['String']>;
  /** Предзаказ(проверка доступности заказа) */
  preorder?: InputMaybe<Scalars['Boolean']>;
  /** Идентификатор проекта */
  project_id: Scalars['String'];
  /** Протокол (для NAS) */
  protocol?: InputMaybe<Scalars['String']>;
  /** SSH ключ */
  public_ssh?: InputMaybe<Scalars['String']>;
  /** название SSH ключа */
  public_ssh_name?: InputMaybe<Scalars['String']>;
  /** Объем RAM */
  ram: Scalars['Int'];
  /** Код региона */
  region?: InputMaybe<Scalars['String']>;
  /** Идентификатор группы безопасности */
  security_group_id?: InputMaybe<Scalars['Int']>;
  /** Имя ВМ */
  service_name?: InputMaybe<Scalars['String']>;
  /** Название микросегмента */
  vcf_application?: InputMaybe<Scalars['String']>;
  /** Виртуализация */
  virtualization?: InputMaybe<IVirtualizationPlatforms>;
  /** Data диски */
  volumes?: InputMaybe<Array<IServerHddDataParams>>;
  /** Сегмент сети */
  zone?: InputMaybe<Scalars['String']>;
};

export type ICreateServerParamsServerOrchestratorParams = {
  /** Локальный IP */
  local_ip: Scalars['String'];
  /** Имя ВМ */
  name: Scalars['String'];
  /** Параметры для обсервера */
  observer?: InputMaybe<Scalars['Boolean']>;
  /** outputs ВМ */
  outputs: Scalars['JSON'];
};

export type IDataHddForSendingRequest = {
  description?: InputMaybe<Scalars['String']>;
  fs_type?: InputMaybe<IFileSystemType>;
  name?: InputMaybe<Scalars['String']>;
  path?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
};

export type IDataHddFormValues = {
  __typename?: 'DataHddFormValues';
  currentMinSize?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  disabled?: Maybe<Scalars['Boolean']>;
  fs_type?: Maybe<IFileSystemType>;
  isDefault?: Maybe<Scalars['Boolean']>;
  key: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  path: Scalars['String'];
  size?: Maybe<Scalars['Int']>;
  storage_type?: Maybe<Scalars['String']>;
};

export type IDataHddSetItemParams = {
  volumes: Array<IDataHddForSendingRequest>;
};

export enum IDataHddStatus {
  Created = 'created',
  Creating = 'creating',
  Faild = 'faild',
  Removing = 'removing'
}

export enum IDirection {
  Down = 'down',
  Up = 'up'
}

export type IDomain = {
  __typename?: 'Domain';
  admin_control_n_prom: Scalars['Boolean'];
  admin_control_prom?: Maybe<Scalars['Boolean']>;
  admin_logins: Array<Scalars['String']>;
  business_block: IBusinessBlock;
  created_at: Scalars['String'];
  groups?: Maybe<Array<IGroup>>;
  groups_count: Scalars['Int'];
  high_critical_class?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  is_deleted: Scalars['Boolean'];
  is_prom: Scalars['Boolean'];
  limit: Scalars['Int'];
  name: Scalars['String'];
  portal_id: Scalars['String'];
  sap_id: Scalars['String'];
  total_users_count: Scalars['Int'];
  type?: Maybe<IAccountType>;
  updated_at: Scalars['String'];
};

export type IDomainFilters = {
  params?: InputMaybe<IDomainFiltersParams>;
};

export type IDomainFiltersParams = {
  direction?: InputMaybe<IDirection>;
  page?: InputMaybe<Scalars['Int']>;
  per_page?: InputMaybe<Scalars['Int']>;
  searchstring?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<IDomainSortOptions>;
  type?: InputMaybe<IAccountType>;
};

export enum IDomainSortOptions {
  AdminLogins = 'admin_logins',
  GroupsCount = 'groups_count',
  IsProm = 'is_prom',
  Name = 'name',
  TotalUsersCount = 'total_users_count'
}

export enum IEStandType {
  Dev = 'dev',
  Ift = 'ift',
  Prom = 'prom',
  Psi = 'psi',
  Test = 'test'
}

export enum IFaultTolerance {
  Cluster = 'cluster',
  StandAlone = 'standAlone'
}

export enum IFileSystemType {
  Ext4 = 'ext4',
  Ntfs = 'ntfs'
}

export type IFirewall = {
  __typename?: 'Firewall';
  status?: Maybe<Scalars['String']>;
};

export type IFlavor = {
  __typename?: 'Flavor';
  available_nodes?: Maybe<Scalars['Int']>;
  baremetal_count?: Maybe<Scalars['Int']>;
  cost?: Maybe<Scalars['String']>;
  cpu?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  flavor?: Maybe<Scalars['String']>;
  hdd?: Maybe<Scalars['Int']>;
  hdd_max?: Maybe<Scalars['Int']>;
  hdd_min?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  ram?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
};

export type IFlavorRange = {
  __typename?: 'FlavorRange';
  cpu: IFlavorRangeItem;
  ram: IFlavorRangeItem;
};

export type IFlavorRangeItem = {
  __typename?: 'FlavorRangeItem';
  default?: Maybe<Scalars['Int']>;
  max: Scalars['Int'];
  min: Scalars['Int'];
};

export type IGroup = ICommon & {
  __typename?: 'Group';
  admin_control?: Maybe<Scalars['Boolean']>;
  admin_control_timeout?: Maybe<Scalars['Float']>;
  admins: Array<IUser>;
  balance: IGroupBalance;
  created_at: Scalars['String'];
  domain: IDomain;
  high_critical_class?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  is_deleted: Scalars['Boolean'];
  is_prom: Scalars['Boolean'];
  name: Scalars['String'];
  portal_id: Scalars['Int'];
  servers?: Maybe<Array<IServer>>;
  stands: Array<IStand>;
  updated_at: Scalars['String'];
  users_count: Scalars['Int'];
};

export type IGroupBalance = {
  __typename?: 'GroupBalance';
  balance: Scalars['Float'];
  blockedAmount: Scalars['Float'];
  dayCost: Scalars['Float'];
  monthLimit: Scalars['Float'];
};

export type IGroupFilters = {
  params: IGroupFiltersParams;
};

export type IGroupFiltersParams = {
  domain_id?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  per_page?: InputMaybe<Scalars['Int']>;
  searchstring?: InputMaybe<Scalars['String']>;
};

export type IInputParameter = {
  __typename?: 'InputParameter';
  child_attrs?: Maybe<Array<Maybe<IInputParameters>>>;
  default?: Maybe<Array<Maybe<Scalars['String']>>>;
  hint?: Maybe<Scalars['String']>;
  max_items?: Maybe<Scalars['Int']>;
  regex?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  type?: Maybe<IInputParameterType>;
  uitype?: Maybe<IUiType>;
  /** TODO Resolve Field - может быть массивом строк */
  values?: Maybe<IMinMaxInputParameter>;
};

export enum IInputParameterType {
  Integer = 'integer',
  List = 'list'
}

export type IInputParameters = {
  __typename?: 'InputParameters';
  vm?: Maybe<IInputParameter>;
};

export type IInputParametersUnion = IInputParameter | IInputParameters;

export enum IIrType {
  Vm = 'vm'
}

export type IIrTypeGetParams = {
  as_ci?: InputMaybe<Scalars['String']>;
  domain_id?: InputMaybe<Scalars['String']>;
  environment?: InputMaybe<Scalars['String']>;
  group_id?: InputMaybe<Scalars['String']>;
  network?: InputMaybe<Scalars['String']>;
  stand_type?: InputMaybe<Scalars['String']>;
  virtualization?: InputMaybe<Scalars['String']>;
};

export type IIrTypeParams = {
  __typename?: 'IrTypeParams';
  flavors: Array<IFlavor>;
  flavors_range?: Maybe<IFlavorRange>;
  /** TODO Resolve field - может быть только Объектным типом из юниона */
  input_parameters?: Maybe<IInputParametersUnion>;
  /** TODO Resolve field - может быть только числом */
  input_parameters_number?: Maybe<Scalars['Int']>;
  json_schema?: Maybe<IJsonSchema>;
};

export type IIssue = {
  __typename?: 'Issue';
  /** Исполнитель */
  assignee?: Maybe<Scalars['String']>;
  /** Тип обращения */
  issuetype: Scalars['String'];
  /** Номер обращения */
  key: Scalars['String'];
  /** Статус */
  status: Scalars['String'];
  /** Тема */
  summary: Scalars['String'];
  /** Ссылка на обращение */
  url: Scalars['String'];
};

export type IJsonSchema = {
  __typename?: 'JsonSchema';
  properties: IJsonSchemaProperties;
  required: Array<Scalars['String']>;
  type: Scalars['String'];
};

export type IJsonSchemaItems = {
  __typename?: 'JsonSchemaItems';
  properties: IJsonSchemaItemsProperties;
};

export type IJsonSchemaItemsProperties = {
  __typename?: 'JsonSchemaItemsProperties';
  size: IJsonSchemaItemsPropertiesSize;
};

export type IJsonSchemaItemsPropertiesSize = {
  __typename?: 'JsonSchemaItemsPropertiesSize';
  maximum: Scalars['Int'];
  minimum: Scalars['Int'];
};

export type IJsonSchemaProperties = {
  __typename?: 'JsonSchemaProperties';
  volume_size?: Maybe<IVolumeSize>;
  volumes?: Maybe<IVolumes>;
};

export enum IMaxCostType {
  Group = 'group',
  Region = 'region'
}

export type IMaxGroupOrderLimit = {
  __typename?: 'MaxGroupOrderLimit';
  blocking_amount: Scalars['Int'];
  client_type: IMaxCostType;
  limit: Scalars['Int'];
};

export type IMinMaxInputParameter = {
  __typename?: 'MinMaxInputParameter';
  max: Scalars['Int'];
  min: Scalars['Int'];
};

export type IMoveServerParams = {
  __typename?: 'MoveServerParams';
  auth_type?: Maybe<Scalars['String']>;
  cluster_uuids?: Maybe<Array<IServer>>;
  customer_id: Scalars['Int'];
  group_uuid: Scalars['String'];
  parent_order_id: Scalars['Int'];
  parent_order_uuid: Scalars['String'];
  region_uuid: Scalars['String'];
  request_ip: Scalars['String'];
  requester: Scalars['String'];
  stand_name: Scalars['String'];
  tariff_plan: Scalars['String'];
  user_uuid: Scalars['String'];
  vms_uuids?: Maybe<Array<IServer>>;
};

export type IMutation = {
  __typename?: 'Mutation';
  createServers: IServerCreateResult;
  deleteV1Cluster: IServer;
  deleteV1Product: IServer;
  deleteV1Server: IServer;
  deleteV1ServerHdd: IServer;
  patchV1ChangeActionServer: IServer;
  patchV1ChangeClusterAction: IServer;
  patchV1ChangeClusterComment: IServer;
  patchV1ChangeClusterStatus: IServer;
  patchV1ChangeFlavorStatus: IServer;
  patchV1ChangeServerComment: IServer;
  patchV1ChangeServerHddStatus: IServer;
  patchV1ChangeServerStatus: IServer;
  patchV1RenameCluster: IServer;
  patchV1RenameServer: IServer;
  patchV1ResizeClusterApprove: IServer;
  patchV1ResizeServerApprove: IStand;
  patchV1UpdateClusterConfig: IServer;
  patchV1UpdateServerConfig: IServer;
  postV1AddClusterHdd: IServer;
  postV1AddNodesToCluster: Scalars['JSON'];
  postV1AddServerHdd: IServer;
  postV1ApproveMovingServers: IStand;
  /** Загрузка файла с корректировками бюджета */
  postV1BillingUploadAdjustmentFile: Scalars['JSON'];
  postV1CopyTariffPlan: ITariffPlan;
  /** Отправка обращения в СберДруг */
  postV1IssuesSberfriend: IIssue;
  postV1MoveServers: IStand;
  postV1RebuildServer: IServer;
  postV1ResizeCluster: IServer;
  postV1ResizeServer: IServer;
  postV1ServersCancelPendingStatuses: IServer;
  test?: Maybe<Scalars['String']>;
};


export type IMutationCreateServersArgs = {
  params?: InputMaybe<ICreateServerParams>;
};


export type IMutationDeleteV1ClusterArgs = {
  confirmParams?: InputMaybe<IConfirmActionParams>;
  state: Scalars['String'];
  uuid: Scalars['String'];
};


export type IMutationDeleteV1ProductArgs = {
  kvr_timeout?: InputMaybe<Scalars['Int']>;
  uuid: Scalars['String'];
};


export type IMutationDeleteV1ServerArgs = {
  confirmParams?: InputMaybe<IConfirmActionParams>;
  state: Scalars['String'];
  uuid: Scalars['String'];
};


export type IMutationDeleteV1ServerHddArgs = {
  path?: InputMaybe<Scalars['String']>;
  uuid: Scalars['String'];
  volume_uuid: Scalars['String'];
};


export type IMutationPatchV1ChangeActionServerArgs = {
  id: Scalars['String'];
  params: IPatchV1ServersUuidActionInput;
};


export type IMutationPatchV1ChangeClusterActionArgs = {
  params: IPatchV1ServersClustersClusterUuidActionInput;
  uuid: Scalars['String'];
};


export type IMutationPatchV1ChangeClusterCommentArgs = {
  comment: Scalars['String'];
  uuid: Scalars['String'];
};


export type IMutationPatchV1ChangeClusterStatusArgs = {
  body: IPatchV1ServersUuidUpdateStatusInput;
  uuid: Scalars['String'];
};


export type IMutationPatchV1ChangeFlavorStatusArgs = {
  status: Scalars['String'];
  uuid: Scalars['String'];
};


export type IMutationPatchV1ChangeServerCommentArgs = {
  comment: Scalars['String'];
  uuid: Scalars['String'];
};


export type IMutationPatchV1ChangeServerHddStatusArgs = {
  status: Scalars['String'];
  uuid: Scalars['String'];
  volume_uuid: Scalars['String'];
};


export type IMutationPatchV1ChangeServerStatusArgs = {
  body: IPatchV1ServersUuidUpdateStatusInput;
  uuid: Scalars['String'];
};


export type IMutationPatchV1RenameClusterArgs = {
  service_name: Scalars['String'];
  uuid: Scalars['String'];
};


export type IMutationPatchV1RenameServerArgs = {
  service_name: Scalars['String'];
  uuid: Scalars['String'];
};


export type IMutationPatchV1ResizeClusterApproveArgs = {
  confirmParams: IConfirmResizeApprove;
  uuid: Scalars['String'];
};


export type IMutationPatchV1ResizeServerApproveArgs = {
  confirmParams: IConfirmResizeApprove;
  uuid: Scalars['String'];
};


export type IMutationPatchV1UpdateClusterConfigArgs = {
  uuid: Scalars['String'];
};


export type IMutationPatchV1UpdateServerConfigArgs = {
  params?: InputMaybe<IPatchV1UpdateServerConfigParams>;
  uuid: Scalars['String'];
};


export type IMutationPostV1AddClusterHddArgs = {
  params?: InputMaybe<IDataHddForSendingRequest>;
  uuid: Scalars['String'];
};


export type IMutationPostV1AddNodesToClusterArgs = {
  params: IPostV1ServersClustersAddNodesInput;
};


export type IMutationPostV1AddServerHddArgs = {
  params?: InputMaybe<IDataHddSetItemParams>;
  uuid: Scalars['String'];
};


export type IMutationPostV1ApproveMovingServersArgs = {
  uuids: Array<Scalars['String']>;
};


export type IMutationPostV1BillingUploadAdjustmentFileArgs = {
  file: IParam_PostV1BillingUploadAdjustmentFile_FileInput;
};


export type IMutationPostV1CopyTariffPlanArgs = {
  tariff_plan?: InputMaybe<ITariffPlanCopyParams>;
};


export type IMutationPostV1IssuesSberfriendArgs = {
  description?: InputMaybe<Scalars['String']>;
  issuetype: Scalars['String'];
  operation?: InputMaybe<Scalars['String']>;
  order_uuid: Scalars['String'];
};


export type IMutationPostV1MoveServersArgs = {
  params: IPostV1ServersConfirmMovingVmsInput;
};


export type IMutationPostV1RebuildServerArgs = {
  confirmParams?: InputMaybe<IConfirmActionParams>;
  id: Scalars['String'];
  state: Scalars['String'];
};


export type IMutationPostV1ResizeClusterArgs = {
  confirmParams?: InputMaybe<IConfirmActionParams>;
  params: IResizeServerParams;
  uuid: Scalars['String'];
};


export type IMutationPostV1ResizeServerArgs = {
  confirmParams?: InputMaybe<IConfirmActionParams>;
  params: IResizeServerParams;
  uuid: Scalars['String'];
};


export type IMutationPostV1ServersCancelPendingStatusesArgs = {
  comment?: InputMaybe<Scalars['String']>;
  uuids: Array<InputMaybe<Scalars['String']>>;
};

export type INetwork = {
  __typename?: 'Network';
  /** Адрес сети */
  cidr: Scalars['String'];
  /** DNS-сервера */
  dns_nameservers: Array<Scalars['String']>;
  /** DHCP */
  enable_dhcp: Scalars['Boolean'];
  /** Идентификатор стенда */
  id?: Maybe<Scalars['String']>;
  /** Сеть по-умолчанию */
  is_default?: Maybe<Scalars['Boolean']>;
  /** Имя сети */
  network_name: Scalars['String'];
  /** uuid сети, не передается при создании */
  network_uuid?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type IOpenstack = {
  __typename?: 'Openstack';
  regionName: Scalars['String'];
};

export enum IOrchestrator {
  Lime = 'lime',
  Vra = 'vra'
}

export enum IOsName {
  Appliance = 'appliance',
  Openshift = 'openshift',
  Rhcos = 'rhcos',
  Rhel = 'rhel',
  RhelDocker = 'rhel_docker',
  Windows = 'windows'
}

export type IOutputs = {
  __typename?: 'Outputs';
  bootstrap_ign?: Maybe<Scalars['String']>;
  db_sa_password?: Maybe<Scalars['String']>;
  db_user_password?: Maybe<Scalars['String']>;
  endpoint: Scalars['String'];
  fqdn: Scalars['String'];
  ibus_password?: Maybe<Scalars['String']>;
  ibus_user?: Maybe<Scalars['String']>;
  master_ign?: Maybe<Scalars['String']>;
  mq_password?: Maybe<Scalars['String']>;
  mq_user?: Maybe<Scalars['String']>;
  nginx_password?: Maybe<Scalars['String']>;
  nginx_user?: Maybe<Scalars['String']>;
  os_password?: Maybe<Scalars['String']>;
  os_user?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  server_ip: Scalars['String'];
  server_security_groups: Array<Maybe<IServerSecurityGroup>>;
  spo_password?: Maybe<Scalars['String']>;
  spo_user?: Maybe<Scalars['String']>;
  user: Scalars['String'];
  vm_id: Scalars['String'];
  was_password?: Maybe<Scalars['String']>;
  was_user?: Maybe<Scalars['String']>;
  websphere_password?: Maybe<Scalars['String']>;
  websphere_user?: Maybe<Scalars['String']>;
  wf2_password?: Maybe<Scalars['String']>;
  wf2_user?: Maybe<Scalars['String']>;
  wf_password?: Maybe<Scalars['String']>;
  wf_user?: Maybe<Scalars['String']>;
  wfadmin2_password?: Maybe<Scalars['String']>;
  wfadmin2_user?: Maybe<Scalars['String']>;
  wfadmin_password?: Maybe<Scalars['String']>;
  wfadmin_user?: Maybe<Scalars['String']>;
  worker_ign?: Maybe<Scalars['String']>;
};

export type IPermission = {
  __typename?: 'Permission';
  action: Scalars['String'];
  conditions: Array<Scalars['String']>;
  policy_object: Scalars['String'];
};

export type IPool = {
  __typename?: 'Pool';
  active: Scalars['Boolean'];
  environment: Array<Scalars['String']>;
  network: Array<Scalars['String']>;
  openstack?: Maybe<IOpenstack>;
  pool: Scalars['String'];
  pool_uuid: Scalars['ID'];
  update_dt: Scalars['String'];
};

export type IPoolFilters = {
  active?: InputMaybe<Scalars['Boolean']>;
  datacenter?: InputMaybe<Scalars['String']>;
  environment?: InputMaybe<Array<Scalars['String']>>;
  netZone?: InputMaybe<Scalars['String']>;
  network?: InputMaybe<Array<Scalars['String']>>;
  pool?: InputMaybe<Scalars['String']>;
  pool_uuid?: InputMaybe<Scalars['String']>;
};

export type IQuery = {
  __typename?: 'Query';
  calculateCost: IServerCost;
  domain: IDomain;
  domains: Array<IDomain>;
  getV1AppSystems: IAppSystemReturnType;
  getV1BusinessBlock: IBusinessBlock;
  getV1BusinessBlocks: Array<Maybe<IBusinessBlock>>;
  getV1Cluster: IGetV1ClusterReturnType;
  getV1CombineProduct: IGetV1CombineProductReturnType;
  getV1CompositionIrs: ICompositionIrReturnType;
  getV1DictOperations: IServerOperationResult;
  getV1IrTypeParams: IIrTypeParams;
  /** Список задач */
  getV1Issues: Array<IIssue>;
  getV1MaxGroupOrderLimit: IMaxGroupOrderLimit;
  getV1ProjectOrdersMasters: IGetV1ProjectOrdersReturnType;
  getV1ProjectOrdersSlaves: IGetV1ProjectOrdersReturnType;
  getV1SchedulerServerList: IGetV1SchedulerServerListReturnType;
  getV1ServerMonitoringGraphics: IGetV1ServerMonitoringGraphicsReturnType;
  getV1StandType: IStandTypeReturnType;
  getV1TariffPlans: Array<Maybe<ITariffPlan>>;
  group: IGroup;
  groupBalance: IGroupBalance;
  groups: Array<IGroup>;
  pools: Array<IPool>;
  server?: Maybe<IServer>;
  servers?: Maybe<Array<IServer>>;
  stand: IStand;
  stands: Array<IStand>;
  test?: Maybe<Scalars['String']>;
  user: IUser;
  usersWithStorage?: Maybe<IUsersWithStorage>;
};


export type IQueryCalculateCostArgs = {
  params: ICalculateParams;
};


export type IQueryDomainArgs = {
  uuid: Scalars['String'];
};


export type IQueryDomainsArgs = {
  filters?: InputMaybe<IDomainFilters>;
};


export type IQueryGetV1AppSystemsArgs = {
  params: IAppSystemsGetParams;
};


export type IQueryGetV1BusinessBlockArgs = {
  blockId?: InputMaybe<IGetV1BusinessBlockParams>;
};


export type IQueryGetV1ClusterArgs = {
  uuid: Scalars['String'];
};


export type IQueryGetV1CombineProductArgs = {
  uuid: Scalars['String'];
};


export type IQueryGetV1CompositionIrsArgs = {
  params: ICompositionIrsGetParams;
};


export type IQueryGetV1IrTypeParamsArgs = {
  irType: Scalars['String'];
  params?: InputMaybe<IIrTypeGetParams>;
};


export type IQueryGetV1IssuesArgs = {
  order_uuid?: InputMaybe<Scalars['String']>;
  user_uuid?: InputMaybe<Scalars['String']>;
};


export type IQueryGetV1MaxGroupOrderLimitArgs = {
  groupUuid: Scalars['String'];
};


export type IQueryGetV1ProjectOrdersMastersArgs = {
  params: IGetV1ProjectOrdersMastersParams;
};


export type IQueryGetV1ProjectOrdersSlavesArgs = {
  params: IGetV1ProjectOrdersSlavesParams;
};


export type IQueryGetV1SchedulerServerListArgs = {
  project_id: Scalars['String'];
};


export type IQueryGetV1ServerMonitoringGraphicsArgs = {
  params: IGetV1ServerMonitoringGraphicsParams;
  uuid: Scalars['String'];
};


export type IQueryGetV1StandTypeArgs = {
  params?: InputMaybe<IStandTypesGetParams>;
};


export type IQueryGetV1TariffPlansArgs = {
  params?: InputMaybe<IGetV1TariffPlansParams>;
};


export type IQueryGroupArgs = {
  uuid: Scalars['String'];
};


export type IQueryGroupBalanceArgs = {
  account_type: Scalars['String'];
  uuid: Scalars['String'];
};


export type IQueryGroupsArgs = {
  filters?: InputMaybe<IGroupFilters>;
};


export type IQueryPoolsArgs = {
  filters: IPoolFilters;
};


export type IQueryServerArgs = {
  uuid: Scalars['String'];
};


export type IQueryServersArgs = {
  serversByGroup?: InputMaybe<IServersByGroup>;
  serversByProject?: InputMaybe<IServersByProject>;
};


export type IQueryStandArgs = {
  uuid: Scalars['String'];
};


export type IQueryStandsArgs = {
  filters?: InputMaybe<IStandFilters>;
};

export type IRealSnapshots = {
  __typename?: 'RealSnapshots';
  created_at: Scalars['String'];
  name: Scalars['String'];
  size: Scalars['Int'];
  snapshot_uuid: Scalars['String'];
  status: IServerSnapshotStatus;
  volume_uuid: Scalars['String'];
};

export type IRegion = {
  __typename?: 'Region';
  business_block_id?: Maybe<Scalars['Int']>;
  created_at: Scalars['String'];
  id: Scalars['Int'];
  is_deleted: Scalars['Boolean'];
  is_prom: Scalars['Boolean'];
  name: Scalars['String'];
  sap_id: Scalars['String'];
  type: Scalars['String'];
  update_at: Scalars['String'];
  uuid: Scalars['String'];
};

export type IResizeServerParams = {
  comment?: InputMaybe<Scalars['String']>;
  cpu?: InputMaybe<Scalars['Int']>;
  flavor?: InputMaybe<Scalars['String']>;
  ram?: InputMaybe<Scalars['Int']>;
};

export type IRole = {
  __typename?: 'Role';
  name: IRoleName;
};

export enum IRoleName {
  Auditor = 'auditor',
  BusinessBlockFinancier = 'business_block_financier',
  CatalogAdmin = 'catalog_admin',
  GroupAdmin = 'group_admin',
  OrderUser = 'order_user',
  PortalAdmin = 'portal_admin',
  PortalFinancier = 'portal_financier',
  RegionAdmin = 'region_admin',
  RegionFinancier = 'region_financier',
  RoAdmin = 'ro_admin',
  User = 'user'
}

export type ISatandParamsOneOf = {
  domain_id?: InputMaybe<Scalars['String']>;
  group_ids?: InputMaybe<Array<Scalars['String']>>;
};

export type IServer = {
  __typename?: 'Server';
  additional_info?: Maybe<Scalars['String']>;
  app_params?: Maybe<IAppParams>;
  attrs?: Maybe<Scalars['String']>;
  bandwidth: Scalars['String'];
  batch_uuid: Scalars['String'];
  check_ci?: Maybe<ICheckCiResult>;
  ci_server?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  cluster_uuid?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  cpu: Scalars['Int'];
  created_at: Scalars['String'];
  creator_login: Scalars['String'];
  creator_name?: Maybe<Scalars['String']>;
  deprovision_error_message?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  disk?: Maybe<Scalars['Int']>;
  dns?: Maybe<Scalars['String']>;
  endpoint?: Maybe<Scalars['String']>;
  external_ip_associated_with_load_balancer?: Maybe<Scalars['String']>;
  fault_tolerance: IFaultTolerance;
  firewall?: Maybe<IFirewall>;
  flavour: Scalars['String'];
  greenfield?: Maybe<Scalars['Boolean']>;
  group: IGroup;
  hdd?: Maybe<IServerHddSystem>;
  hpsm_ci?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  interfaces?: Maybe<IServerInterface>;
  internet_access?: Maybe<Scalars['Boolean']>;
  ip?: Maybe<Scalars['String']>;
  ir_group: Scalars['String'];
  ir_type: Scalars['String'];
  kvr_timeout?: Maybe<Scalars['String']>;
  master_uuid?: Maybe<Scalars['String']>;
  move_params?: Maybe<IMoveServerParams>;
  name: Scalars['String'];
  node_name?: Maybe<Scalars['String']>;
  node_type?: Maybe<Scalars['String']>;
  orchestrator?: Maybe<IOrchestrator>;
  order_created_at: Scalars['String'];
  os_name: IOsName;
  os_version: Scalars['String'];
  output_parameters?: Maybe<IServerOutputParameters>;
  outputs: IOutputs;
  password?: Maybe<Scalars['String']>;
  pending_initiator_uuid?: Maybe<Scalars['String']>;
  product_name?: Maybe<Scalars['String']>;
  product_uuid?: Maybe<Scalars['String']>;
  protocol?: Maybe<Scalars['String']>;
  public_ssh_name?: Maybe<Scalars['String']>;
  ram: Scalars['Int'];
  real_interfaces?: Maybe<Array<Maybe<IServerRealInterfaces>>>;
  region: Scalars['String'];
  region_name: Scalars['String'];
  region_names?: Maybe<Array<Maybe<Scalars['String']>>>;
  security_group_name?: Maybe<Scalars['String']>;
  server_state?: Maybe<IVmServerState>;
  servers?: Maybe<Array<IServer>>;
  service_name: Scalars['String'];
  service_type: IServiceType;
  slaves_count?: Maybe<Scalars['Int']>;
  snapshots?: Maybe<Array<Maybe<IServerSnapshot>>>;
  stand: IStand;
  stand_type?: Maybe<IEStandType>;
  state: IVmSatate;
  step?: Maybe<Scalars['String']>;
  tags_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
  tariff_plan: Scalars['String'];
  /** Создается только во время изменения конфигурации */
  temp_flavour?: Maybe<ITempFlavour>;
  type: IServerType;
  user?: Maybe<Scalars['String']>;
  utilization_info?: Maybe<IUtilizationInfo>;
  vcf_application?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  virtualization?: Maybe<IVirtualizationPlatforms>;
  vms_count?: Maybe<Scalars['Int']>;
  volumes?: Maybe<IServerHddData>;
  was_running?: Maybe<Scalars['Boolean']>;
  zone: Scalars['String'];
};

export type IServerCost = {
  __typename?: 'ServerCost';
  /** Общая стоимость */
  cost: Scalars['Float'];
  /** Стоимость по ВМ (руб.) */
  vms: IServerCostDetails;
};

export type IServerCostDetails = {
  __typename?: 'ServerCostDetails';
  vm10: Array<IServerCostItem>;
};

export type IServerCostItem = {
  __typename?: 'ServerCostItem';
  count: Scalars['String'];
  name: Scalars['String'];
  only_active: Scalars['Boolean'];
  price: Scalars['String'];
  tk_cost: Scalars['String'];
  tk_name: Scalars['String'];
};

export type IServerCreateResult = {
  __typename?: 'ServerCreateResult';
  servers: Array<IServer>;
};

export type IServerHddData = {
  __typename?: 'ServerHddData';
  description?: Maybe<Scalars['String']>;
  fs_type: IFileSystemType;
  name: Scalars['String'];
  path: Scalars['String'];
  size: Scalars['Int'];
  status?: Maybe<IDataHddStatus>;
  storage_type: Scalars['String'];
  volume_id: Scalars['String'];
};

export type IServerHddDataParams = {
  description?: InputMaybe<Scalars['String']>;
  fs_type: IFileSystemType;
  name: Scalars['String'];
  path: Scalars['String'];
  size: Scalars['Int'];
  status?: InputMaybe<IDataHddStatus>;
  storage_type: Scalars['String'];
  volume_id: Scalars['String'];
};

export type IServerHddSystem = {
  __typename?: 'ServerHddSystem';
  size: Scalars['Int'];
  type?: Maybe<Scalars['String']>;
};

export type IServerHddSystemParams = {
  size: Scalars['Int'];
  type?: InputMaybe<Scalars['String']>;
};

export type IServerInterface = {
  __typename?: 'ServerInterface';
  backup?: Maybe<Scalars['Boolean']>;
  dns_domain?: Maybe<Scalars['String']>;
  net_segment: Scalars['String'];
  primary?: Maybe<Scalars['Boolean']>;
};

export type IServerOperation = {
  __typename?: 'ServerOperation';
  id: Scalars['String'];
  name: Scalars['String'];
};

export type IServerOperationResult = {
  __typename?: 'ServerOperationResult';
  operations: IServerOperation;
};

export type IServerOutputParameters = {
  __typename?: 'ServerOutputParameters';
  version: ITitleValue;
};

export type IServerRealInterfaces = {
  __typename?: 'ServerRealInterfaces';
  id: Scalars['String'];
  ip: Scalars['String'];
};

export type IServerReturnType = {
  __typename?: 'ServerReturnType';
  server: IServer;
};

export type IServerSecurityGroup = {
  __typename?: 'ServerSecurityGroup';
  id: Scalars['String'];
  name: Scalars['String'];
};

export type IServerSnapshot = {
  __typename?: 'ServerSnapshot';
  action_status: IServerSnapshotStatus;
  created_at: Scalars['String'];
  parent_snapshot_uuid?: Maybe<Scalars['String']>;
  real_snapshots?: Maybe<Array<Maybe<IRealSnapshots>>>;
  snapshot_list_name?: Maybe<Scalars['String']>;
  status: IServerSnapshotStatus;
  status_vm: IVmServerState;
};

export enum IServerSnapshotStatus {
  Created = 'created',
  Creating = 'creating',
  Deleting = 'deleting',
  Faild = 'faild',
  FailedToDelete = 'failed_to_delete',
  FailedToRestore = 'failed_to_restore',
  Restoring = 'restoring'
}

export enum IServerType {
  Cluster = 'cluster',
  Vm = 'vm'
}

export type IServersByGroup = {
  groupId: Scalars['ID'];
  ir_type?: InputMaybe<IIrType>;
  name?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  stand_type?: InputMaybe<IEStandType>;
};

export type IServersByProject = {
  ir_type?: InputMaybe<IIrType>;
  name?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  projectId: Scalars['ID'];
  stand_type?: InputMaybe<IEStandType>;
};

export enum IServiceType {
  App = 'app',
  Combine = 'combine',
  Compute = 'compute',
  Db = 'db',
  Storage = 'storage'
}

export type ISingleRegion = {
  __typename?: 'SingleRegion';
  groups_count?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
};

export type ISshKeys = {
  __typename?: 'SshKeys';
  default: Scalars['Boolean'];
  public_ssh: Scalars['String'];
  public_ssh_name: Scalars['String'];
  uuid: Scalars['ID'];
};

export type IStand = {
  __typename?: 'Stand';
  any_pending_orders?: Maybe<Scalars['Boolean']>;
  app_systems_ci: Scalars['String'];
  app_systems_ci_deleted: Scalars['Boolean'];
  app_systems_ci_name: Scalars['String'];
  app_systems_owner: Scalars['Boolean'];
  as_critical_type: Scalars['String'];
  as_type?: Maybe<Scalars['String']>;
  as_type_name?: Maybe<Scalars['String']>;
  as_utilization?: Maybe<IUtilizationInfo>;
  available_for_order: Scalars['Boolean'];
  child_orders_stat?: Maybe<IChildOrdersStat>;
  cost?: Maybe<Scalars['Float']>;
  creator_name?: Maybe<Scalars['String']>;
  domain: IDomain;
  group: IGroup;
  group_admin_control: Scalars['Boolean'];
  hdd?: Maybe<Array<Maybe<IServerHddSystem>>>;
  hpsm_ci?: Maybe<Scalars['String']>;
  hpsm_composition_ir_ci?: Maybe<Scalars['String']>;
  hpsm_stand_type: Scalars['String'];
  id: Scalars['String'];
  is_prom?: Maybe<Scalars['Boolean']>;
  mode?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  order_created_at?: Maybe<Scalars['String']>;
  region_type: Scalars['String'];
  servers: Array<Maybe<IServer>>;
  stand_type: IEStandType;
  stand_type_id: Scalars['String'];
  stand_type_name: Scalars['String'];
  stand_utilization?: Maybe<IUtilizationInfo>;
  state?: Maybe<IEStandState>;
  temp_flavor?: Maybe<ITempFlavour>;
  type: Scalars['String'];
  virtualization?: Maybe<Scalars['String']>;
};

export type IStandFilters = {
  oneOf?: InputMaybe<ISatandParamsOneOf>;
  params?: InputMaybe<IStandParamsSort>;
};

export type IStandParams = {
  direction?: InputMaybe<IDirection>;
  page?: InputMaybe<Scalars['Int']>;
  per_page?: InputMaybe<Scalars['Int']>;
  searchstring?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<IStandParamsSort>;
  with_actual_as?: InputMaybe<Scalars['Boolean']>;
};

export enum IStandParamsSort {
  AppSystemsCiName = 'app_systems_ci_name',
  Cost = 'cost',
  Name = 'name',
  OrderCreatedAt = 'order_created_at',
  StandTypeName = 'stand_type_name',
  State = 'state',
  UtilRatio = 'util_ratio'
}

export type IStandType = {
  __typename?: 'StandType';
  code: Scalars['String'];
  created_at: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  hpsm_stand_type: Scalars['String'];
  id: Scalars['String'];
  is_disabled: Scalars['Boolean'];
  name: Scalars['String'];
  name_short: Scalars['String'];
  sort_order: Scalars['Int'];
  updated_at: Scalars['String'];
  value: Scalars['String'];
};

export type IStandTypeReturnType = {
  __typename?: 'StandTypeReturnType';
  stand_types: Array<IStandType>;
};

export type IStandTypesGetParams = {
  as_type_code: Scalars['String'];
  group_id: Scalars['String'];
};

export type ISubscription = {
  __typename?: 'Subscription';
  test?: Maybe<Scalars['String']>;
};

export type ITariffClass = {
  __typename?: 'TariffClass';
  baseCost: Scalars['Float'];
  cost: Scalars['Float'];
  id?: Maybe<Scalars['Int']>;
  resource: Scalars['String'];
  resource_code: Scalars['String'];
  status_tk?: Maybe<ITariffClassStatus>;
  tarificator_cost?: Maybe<Scalars['Float']>;
  tc_coefficient?: Maybe<Scalars['Float']>;
};

export enum ITariffClassStatus {
  Deleted = 'deleted',
  New = 'new',
  UpdateCost = 'update_cost'
}

export type ITariffPlan = {
  __typename?: 'TariffPlan';
  base: Scalars['Boolean'];
  base_tariff_plan_id?: Maybe<Scalars['Int']>;
  begin_date: Scalars['String'];
  code: Scalars['String'];
  coefficient: Scalars['Float'];
  end_date?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  old_tariff_plan_id?: Maybe<Scalars['Int']>;
  region_id?: Maybe<Scalars['String']>;
  status: ITariffPlanStatus;
  tariff_classes: Array<Maybe<ITariffClass>>;
  title: Scalars['String'];
};

export type ITariffPlanCopyParams = {
  base?: InputMaybe<Scalars['Boolean']>;
  base_tariff_plan_id?: InputMaybe<Scalars['Int']>;
  coefficient?: InputMaybe<Scalars['Float']>;
  old_tariff_plan_id?: InputMaybe<Scalars['Int']>;
  region_id?: InputMaybe<Scalars['String']>;
};

export enum ITariffPlanStatus {
  Active = 'active',
  Archived = 'archived',
  Draft = 'draft',
  Planned = 'planned'
}

export type ITempFlavour = {
  __typename?: 'TempFlavour';
  cpu: Scalars['Int'];
  ram: Scalars['Int'];
};

export type ITitleValue = {
  __typename?: 'TitleValue';
  hide?: Maybe<Scalars['Boolean']>;
  title: Scalars['String'];
  value: Scalars['String'];
};

export type ITitleValueParams = {
  hide?: InputMaybe<Scalars['Boolean']>;
  title: Scalars['String'];
  value: Scalars['String'];
};

export enum IUiType {
  Domainuser = 'domainuser',
  Multiselect = 'multiselect',
  Password = 'password'
}

export type IUser = {
  __typename?: 'User';
  created_at: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['ID'];
  last_group_id?: Maybe<Scalars['Int']>;
  ldap_id: Scalars['String'];
  login: Scalars['String'];
  name: Scalars['String'];
  permissions?: Maybe<Array<IPermission>>;
  roles?: Maybe<Array<IUserRole>>;
  ssh_keys?: Maybe<Array<ISshKeys>>;
  updated_at: Scalars['String'];
};

export type IUserRole = {
  __typename?: 'UserRole';
  /** Дата создания в формате iso8601 */
  created_at: Scalars['String'];
  /** Идентификатор области */
  domain_id: Scalars['String'];
  /** Наименование области */
  domain_name?: Maybe<Scalars['String']>;
  /** Идентификатор */
  id: Scalars['ID'];
  /** Признак ПРОМ группы */
  is_prom_group: Scalars['Boolean'];
  /** Идентификатор сущности */
  origin_id: Scalars['String'];
  /** Название сущности */
  origin_name: Scalars['String'];
  /** Тип связанной сущности */
  origin_type: Scalars['String'];
  /** Уникальный идентификатор роли */
  role_id: Scalars['String'];
  /** Наименование роли */
  role_name?: Maybe<Scalars['String']>;
  /** Дата обновления в формате iso8601 */
  updated_at: Scalars['String'];
  /** Уникальный идентификатор пользователя */
  user_id: Scalars['String'];
};

export type IUsersWithStorage = {
  __typename?: 'UsersWithStorage';
  faild_users?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type IUtilizationInfo = {
  __typename?: 'UtilizationInfo';
  banner_type?: Maybe<IBannerType>;
  event_dt: Scalars['String'];
  exception_reason: Scalars['String'];
  medium_ratio: Scalars['Int'];
  minimum_ratio: Scalars['Int'];
  ratio: Scalars['Int'];
  ratio_quarter: Scalars['Int'];
};

export enum IUtilizationInfoBannerInfo {
  UtilizationBlock = 'utilization_block',
  UtilizationPowerOff = 'utilization_power_off',
  UtilizationResize = 'utilization_resize',
  UtilizationWarning = 'utilization_warning'
}

export enum IVirtualizationPlatforms {
  Baremetal = 'baremetal',
  BaremetalNsx = 'baremetal_nsx',
  Openshift = 'openshift',
  Openstack = 'openstack',
  Vcf = 'vcf',
  Vmware = 'vmware'
}

export enum IVmSatate {
  Actualization = 'actualization',
  Creating = 'creating',
  Damaged = 'damaged',
  PendingClusterVm = 'pending_cluster_vm',
  PendingDeletion = 'pending_deletion',
  PendingHardReboot = 'pending_hard_reboot',
  PendingMove = 'pending_move',
  PendingPowerOff = 'pending_power_off',
  PendingPowerOn = 'pending_power_on',
  PendingRebuild = 'pending_rebuild',
  PendingResize = 'pending_resize',
  PendingSoftReboot = 'pending_soft_reboot',
  Rebooting = 'rebooting',
  Rebuilding = 'rebuilding',
  Resizing = 'resizing',
  ResizingDamaged = 'resizing_damaged',
  Running = 'running',
  Stopped = 'stopped',
  Stopping = 'stopping'
}

export enum IVmServerState {
  Build = 'build',
  Creating = 'creating',
  Damaged = 'damaged',
  Deleting = 'deleting',
  Reboot = 'reboot',
  Rebooting = 'rebooting',
  Rebuild = 'rebuild',
  Resize = 'resize',
  Running = 'running',
  Starting = 'starting',
  Stopping = 'stopping',
  Updating = 'updating'
}

export type IVolumeSize = {
  __typename?: 'VolumeSize';
  default: Scalars['Int'];
  maximum?: Maybe<Scalars['Int']>;
  minimum: Scalars['Int'];
};

export type IVolumes = {
  __typename?: 'Volumes';
  default: Array<IDataHddFormValues>;
  items: IJsonSchemaItems;
  maxItems: Scalars['Int'];
  minItems: Scalars['Int'];
};

export enum IEStandState {
  Damaged = 'damaged',
  Error = 'error',
  Pending = 'pending',
  Ready = 'ready',
  Stopped = 'stopped'
}

export type IGetV1BusinessBlockParams = {
  blockId: Scalars['String'];
};

export type IGetV1ClusterReturnType = {
  __typename?: 'getV1ClusterReturnType';
  cluster: IServer;
};

export type IGetV1CombineProductReturnType = {
  __typename?: 'getV1CombineProductReturnType';
  user_product: IServer;
};

export type IGetV1ProjectOrdersMastersParams = {
  ir_group: Scalars['String'];
  segment: Scalars['String'];
  service_type: Scalars['String'];
  stand_uuid: Scalars['String'];
};

export type IGetV1ProjectOrdersReturnType = {
  __typename?: 'getV1ProjectOrdersReturnType';
  project_orders: Array<Maybe<IServer>>;
};

export type IGetV1ProjectOrdersSlavesParams = {
  master_uuid: Scalars['String'];
  service_type: Scalars['String'];
  stand_uuid: Scalars['String'];
};

export type IGetV1SchedulerServerListReturnType = {
  __typename?: 'getV1SchedulerServerListReturnType';
  servers: Array<Maybe<IServer>>;
};

export type IGetV1ServerMonitoringGraphicsData = {
  __typename?: 'getV1ServerMonitoringGraphicsData';
  data: Array<ICoordinatePoint>;
  max_value: Scalars['Int'];
  name: Scalars['String'];
  unit: Scalars['String'];
};

export type IGetV1ServerMonitoringGraphicsParams = {
  from: Scalars['Int'];
  key: Scalars['String'];
  to: Scalars['Int'];
};

export type IGetV1ServerMonitoringGraphicsReturnType = {
  __typename?: 'getV1ServerMonitoringGraphicsReturnType';
  data: IGetV1ServerMonitoringGraphicsData;
};

export type IGetV1TariffPlansParams = {
  base?: InputMaybe<Scalars['Boolean']>;
  region_id?: InputMaybe<Scalars['String']>;
};

export type IParam_PostV1BillingUploadAdjustmentFile_FileInput = {
  unsupported?: InputMaybe<Scalars['String']>;
};

export type IPatchV1ServersClustersClusterUuidActionInput = {
  /** Комментарий, при переводе кластера в статус подтверждения кого-либо действия */
  comment?: InputMaybe<Scalars['String']>;
  /** Таймаут для статуса КВР */
  kvr_timeout?: InputMaybe<Scalars['Int']>;
  /** Установить обновления ОС при включении? */
  os_auto_update?: InputMaybe<Scalars['Boolean']>;
  /** Сигнал включения кластера */
  os_start?: InputMaybe<Scalars['String']>;
  /** Сигнал выключения кластера */
  os_stop?: InputMaybe<Scalars['String']>;
  reboot?: InputMaybe<IPatchV1ServersClustersClusterUuidActionInput_RebootInput>;
};

export type IPatchV1ServersClustersClusterUuidActionInput_RebootInput = {
  /** Сигнал перезагрузки кластера */
  type?: InputMaybe<Scalars['String']>;
};

export type IPatchV1ServersUuidActionInput = {
  /** Комментарий, при переводе ВМ в статус подтверждения кого-либо действия */
  comment?: InputMaybe<Scalars['String']>;
  /** Таймаут для статуса КВР */
  kvr_timeout?: InputMaybe<Scalars['String']>;
  /** Установить обновления ОС при включении? */
  os_auto_update?: InputMaybe<Scalars['Boolean']>;
  /** Сигнал включения ВМ */
  os_start?: InputMaybe<Scalars['String']>;
  /** Сигнал выключения ВМ */
  os_stop?: InputMaybe<Scalars['String']>;
  reboot?: InputMaybe<IPatchV1ServersUuidActionInput_RebootInput>;
  /** Текущее состояние */
  state?: InputMaybe<Scalars['String']>;
  /** Выключение на основе данных об утилизации */
  utilization?: InputMaybe<Scalars['Boolean']>;
};

export type IPatchV1ServersUuidActionInput_RebootInput = {
  /** Сигнал перезагрузки ВМ */
  type?: InputMaybe<Scalars['String']>;
};

export type IPatchV1ServersUuidUpdateStatusInput = {
  server: IPatchV1ServersUuidUpdateStatusInput_ServerInput;
};

export type IPatchV1ServersUuidUpdateStatusInput_ServerInput = {
  /** Статус сервера */
  status: Scalars['String'];
};

export type IPatchV1UpdateServerConfigParams = {
  cpu?: InputMaybe<Scalars['Int']>;
  hdd?: InputMaybe<Scalars['Int']>;
  os_version?: InputMaybe<Scalars['String']>;
  ram?: InputMaybe<Scalars['Int']>;
  version?: InputMaybe<Scalars['String']>;
};

export type IPostV1ServersClustersAddNodesInput = {
  /** Идентификатор кластера */
  cluster_uuid: Scalars['String'];
  /** Количество нод */
  number_of_nodes: Scalars['Int'];
  /** Доп параметры получаемые из оркестратора */
  orchestrator_params?: InputMaybe<Array<IPostV1ServersClustersAddNodesInput_Orchestrator_ParamsInput_ItemsInput>>;
};

export type IPostV1ServersClustersAddNodesInput_Orchestrator_ParamsInput_ItemsInput = {
  /** Локальный IP */
  local_ip?: InputMaybe<Scalars['String']>;
  /** Имя ВМ */
  name?: InputMaybe<Scalars['String']>;
  /** outputs ВМ */
  outputs?: InputMaybe<Scalars['JSON']>;
};

export type IPostV1ServersConfirmMovingVmsInput = {
  /** Идентификатор проекта */
  project_uuid?: InputMaybe<Scalars['String']>;
  /** Массив идентификаторов ВМ */
  uuids?: InputMaybe<Array<Scalars['String']>>;
};


import gql from 'graphql-tag';
export type ReactiveFunction<TParam> = () => TParam;
export type IGetServersQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type IGetServersQuery = { __typename?: 'Query', servers?: Array<{ __typename?: 'Server', name: string, id: string, ir_group: string }> | null };


export const GetServers = gql`
    query getServers($id: ID!) {
  servers(serversByProject: {projectId: $id}) {
    name
    id
    ir_group
  }
}
    `;

export const GetServersDocument = gql`
    query getServers($id: ID!) {
  servers(serversByProject: {projectId: $id}) {
    name
    id
    ir_group
  }
}
    `;