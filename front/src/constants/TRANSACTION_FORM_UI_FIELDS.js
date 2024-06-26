import {
  KEIKEI_KUBUN_CHOICES,
  SUPPORT_STATUS_CHOICES,
  SUPPORT_MEANS_CHOICES,
} from "./label-choices";

export const TRANSACTION_FIELDS = [
  // CharField, DateField, TextField, FileField
  {
    name: "visit_memo",
    label: "支援内容・把握した課題等",
    isDisplay: true,
    type: "text",
  },

  { name: "visit_date", label: "訪問日", isDisplay: true, type: "date" },
  { name: "report_month", label: "報告月", isDisplay: true, type: "yearMonth" },

  // CharField with choices
  {
    name: "has_support",
    label: "支援の有無",
    isDisplay: true,
    type: "select",
    options: [
      { value: "true", label: "あり" },
      { value: "false", label: "なし" },
    ],
  },
  {
    name: "support_means",
    label: "支援方法",
    isDisplay: true,
    type: "select",
    options: SUPPORT_MEANS_CHOICES,
  },
  {
    name: "keikei_kubun",
    label: "系型区分",
    isDisplay: true,
    type: "select",
    options: KEIKEI_KUBUN_CHOICES,
  },
  {
    name: "support_status",
    label: "支援状況",
    isDisplay: true,
    type: "select",
    options: SUPPORT_STATUS_CHOICES,
  },

  // BooleanField
  {
    name: "is_under_fifty",
    label: "５０人以下",
    isDisplay: true,
    type: "checkbox",
    mLabelGroup: "事業所情報",
  },
  {
    name: "is_before_establishment",
    label: "開業前",
    isDisplay: true,
    type: "checkbox",
    mLabelGroup: "事業所情報",
  },
  {
    name: "is_within_three_years_since_estabrishment",
    label: "開業３年未満",
    isDisplay: true,
    type: "checkbox",
    mLabelGroup: "事業所情報",
  },
  {
    name: "is_dedicated",
    label: "雇用管理責任者選任の有無",
    isDisplay: true,
    type: "checkbox",
    sLabelGroup: "有無状況",
    mLabelGroup: "事業所情報",
  },
  {
    name: "is_participated",
    label: "責任者講習受講経験の有無",
    isDisplay: true,
    type: "checkbox",
    sLabelGroup: "有無状況",
    mLabelGroup: "事業所情報",
  },
  {
    name: "is_use_subsidy",
    label: "助成金",
    isDisplay: true,
    type: "checkbox",
    sLabelGroup: "支援状況",
    mLabelGroup: "事業所情報",
  },
  {
    name: "is_use_other_subsidy",
    label: "その他の助成金",
    isDisplay: true,
    type: "checkbox",
    sLabelGroup: "支援状況",
    mLabelGroup: "事業所情報",
  },
  {
    name: "is_recruiting_on_hw",
    label: "ＨＷに募集中",
    isDisplay: true,
    type: "checkbox",
    sLabelGroup: "情報収集",
    mLabelGroup: "関係機関への情報提供",
  },
  {
    name: "is_going_to_recruit",
    label: "募集予定",
    isDisplay: true,
    type: "checkbox",
    sLabelGroup: "情報収集",
    mLabelGroup: "関係機関への情報提供",
  },
  {
    name: "is_recruiting_on_expect_hw",
    label: "ＨＷ以外に募集中",
    isDisplay: true,
    type: "checkbox",
    sLabelGroup: "情報収集",
    mLabelGroup: "関係機関への情報提供",
  },
  {
    name: "is_accepting_intern",
    label: "介護実習の受入",
    isDisplay: true,
    type: "checkbox",
    sLabelGroup: "情報収集",
    mLabelGroup: "関係機関への情報提供",
  },
  {
    name: "will_inform_hw",
    label: "労働局（ＨＷ）",
    isDisplay: true,
    type: "checkbox",
    sLabelGroup: "伝達先",
    mLabelGroup: "関係機関への情報提供",
  },
  {
    name: "will_inform_prefecture",
    label: "都道府県",
    isDisplay: true,
    type: "checkbox",
    sLabelGroup: "伝達先",
    mLabelGroup: "関係機関への情報提供",
  },
  {
    name: "will_inform_others",
    label: "その他の関係機関",
    isDisplay: true,
    type: "checkbox",
    sLabelGroup: "伝達先",
    mLabelGroup: "関係機関への情報提供",
  },
  {
    name: "done_explain_support",
    label: "支援メニューの説明",
    isDisplay: true,
    requireSupport: true,
    type: "checkbox",
    mLabelGroup: "支援状況",
  },
  {
    name: "done_knowing_problem",
    label: "課題の把握",
    isDisplay: true,
    requireSupport: true,
    type: "checkbox",
    mLabelGroup: "支援状況",
  },
  {
    name: "koyou_job_posting_consult",
    label: "相談",
    sLabelGroup: "求人求職",
    mLabelGroup: "雇用管理に係る支援（全員入力）",
    isDisplay: true,
    requireSupport: true,
    type: "checkbox",
  },
  {
    name: "koyou_job_posting_inform",
    label: "情報",
    sLabelGroup: "求人求職",
    mLabelGroup: "雇用管理に係る支援（全員入力）",
    isDisplay: true,
    requireSupport: true,
    type: "checkbox",
  },
  {
    name: "koyou_working_conditions_consult",
    label: "相談",
    sLabelGroup: "労働条件",
    mLabelGroup: "雇用管理に係る支援（全員入力）",
    isDisplay: true,
    requireSupport: true,
    type: "checkbox",
  },
  {
    name: "koyou_working_conditions_inform",
    label: "情報",
    sLabelGroup: "労働条件",
    mLabelGroup: "雇用管理に係る支援（全員入力）",
    isDisplay: true,
    requireSupport: true,
    type: "checkbox",
  },
  {
    name: "koyou_welfare_benefits_consult",
    label: "相談",
    sLabelGroup: "福利厚生",
    mLabelGroup: "雇用管理に係る支援（全員入力）",
    isDisplay: true,
    requireSupport: true,
    type: "checkbox",
  },
  {
    name: "koyou_welfare_benefits_inform",
    label: "情報",
    sLabelGroup: "福利厚生",
    mLabelGroup: "雇用管理に係る支援（全員入力）",
    isDisplay: true,
    requireSupport: true,
    type: "checkbox",
  },
  {
    name: "koyou_workplace_communication_consult",
    label: "相談",
    sLabelGroup: "職場のコミュニケーション",
    mLabelGroup: "雇用管理に係る支援（全員入力）",
    isDisplay: true,
    requireSupport: true,
    type: "checkbox",
  },
  {
    name: "koyou_workplace_communication_inform",
    label: "情報",
    sLabelGroup: "職場のコミュニケーション",
    mLabelGroup: "雇用管理に係る支援（全員入力）",
    isDisplay: true,
    requireSupport: true,
    type: "checkbox",
  },
  {
    name: "koyou_subsidies_consult",
    label: "相談",
    sLabelGroup: "助成金",
    mLabelGroup: "雇用管理に係る支援（全員入力）",
    isDisplay: true,
    requireSupport: true,
    type: "checkbox",
  },
  {
    name: "koyou_subsidies_inform",
    label: "情報",
    sLabelGroup: "助成金",
    mLabelGroup: "雇用管理に係る支援（全員入力）",
    isDisplay: true,
    requireSupport: true,
    type: "checkbox",
  },
  {
    name: "koyou_care_services_consult",
    label: "相談",
    sLabelGroup: "介護サービス",
    mLabelGroup: "雇用管理に係る支援（全員入力）",
    isDisplay: true,
    requireSupport: true,
    type: "checkbox",
  },
  {
    name: "koyou_care_services_inform",
    label: "情報",
    sLabelGroup: "介護サービス",
    mLabelGroup: "雇用管理に係る支援（全員入力）",
    isDisplay: true,
    requireSupport: true,
    type: "checkbox",
  },
  {
    name: "koyou_workplace_environment_philosophy_consult",
    label: "相談",
    sLabelGroup: "理念・教育・環境等",
    mLabelGroup: "雇用管理に係る支援（全員入力）",
    isDisplay: true,
    requireSupport: true,
    type: "checkbox",
  },
  {
    name: "koyou_workplace_environment_philosophy_inform",
    label: "情報",
    sLabelGroup: "理念・教育・環境等",
    mLabelGroup: "雇用管理に係る支援（全員入力）",
    isDisplay: true,
    requireSupport: true,
    type: "checkbox",
  },
  {
    name: "koyou_workplace_environment_ict_consult",
    label: "相談",
    sLabelGroup: "生産性向上（ICT等）",
    mLabelGroup: "雇用管理に係る支援（全員入力）",
    isDisplay: true,
    requireSupport: true,
    type: "checkbox",
  },
  {
    name: "koyou_workplace_environment_ict_inform",
    label: "情報",
    sLabelGroup: "生産性向上（ICT等）",
    mLabelGroup: "雇用管理に係る支援（全員入力）",
    isDisplay: true,
    requireSupport: true,
    type: "checkbox",
  },
  {
    name: "koyou_skill_development_consult",
    label: "相談",
    sLabelGroup: "能力開発",
    mLabelGroup: "雇用管理に係る支援（全員入力）",
    isDisplay: true,
    requireSupport: true,
    type: "checkbox",
  },
  {
    name: "koyou_skill_development_inform",
    label: "情報",
    sLabelGroup: "能力開発",
    mLabelGroup: "雇用管理に係る支援（全員入力）",
    isDisplay: true,
    requireSupport: true,
    type: "checkbox",
  },
  {
    name: "koyou_employment_management_responsibility_consult",
    label: "相談",
    sLabelGroup: "雇用管理責任者関係",
    mLabelGroup: "雇用管理に係る支援（全員入力）",
    isDisplay: true,
    requireSupport: true,
    type: "checkbox",
  },
  {
    name: "koyou_employment_management_responsibility_inform",
    label: "情報",
    sLabelGroup: "雇用管理責任者関係",
    mLabelGroup: "雇用管理に係る支援（全員入力）",
    isDisplay: true,
    requireSupport: true,
    type: "checkbox",
  },
  {
    name: "koyou_other_consult",
    label: "相談",
    sLabelGroup: "その他（雇用管理）",
    mLabelGroup: "雇用管理に係る支援（全員入力）",
    isDisplay: true,
    requireSupport: true,
    type: "checkbox",
  },
  {
    name: "koyou_other_inform",
    label: "情報",
    sLabelGroup: "その他（雇用管理）",
    mLabelGroup: "雇用管理に係る支援（全員入力）",
    isDisplay: true,
    requireSupport: true,
    type: "checkbox",
  },
  // ... 能力開発に関する項目
  {
    name: "noukai_qualification_system_training_consult",
    label: "相談",
    sLabelGroup: "資格制度・研修情報等",
    mLabelGroup: "アドバイザーによる支援",
    isDisplay: true,
    requireSupport: true,
    type: "checkbox",
  },
  {
    name: "noukai_qualification_system_training_inform",
    label: "情報",
    sLabelGroup: "資格制度・研修情報等",
    mLabelGroup: "アドバイザーによる支援",
    isDisplay: true,
    requireSupport: true,
    type: "checkbox",
  },
  {
    name: "noukai_job_posting_consult",
    label: "相談",
    sLabelGroup: "求人・求職関係",
    mLabelGroup: "アドバイザーによる支援",
    isDisplay: true,
    requireSupport: true,
    type: "checkbox",
  },
  {
    name: "noukai_job_posting_inform",
    label: "情報",
    sLabelGroup: "求人・求職関係",
    mLabelGroup: "アドバイザーによる支援",
    isDisplay: true,
    requireSupport: true,
    type: "checkbox",
  },
  {
    name: "noukai_training_plan_curriculum_consult",
    label: "相談",
    sLabelGroup: "研修計画・カリキュラムの策定",
    mLabelGroup: "アドバイザーによる支援",
    isDisplay: true,
    requireSupport: true,
    type: "checkbox",
  },
  {
    name: "noukai_training_plan_curriculum_inform",
    label: "情報",
    sLabelGroup: "研修計画・カリキュラムの策定",
    mLabelGroup: "アドバイザーによる支援",
    isDisplay: true,
    requireSupport: true,
    type: "checkbox",
  },
  {
    name: "noukai_subsidy_system_for_skill_development_consult",
    label: "相談",
    sLabelGroup: "能力開発に係る助成制度関係",
    mLabelGroup: "アドバイザーによる支援",
    isDisplay: true,
    requireSupport: true,
    type: "checkbox",
  },
  {
    name: "noukai_subsidy_system_for_skill_development_inform",
    label: "情報",
    sLabelGroup: "能力開発に係る助成制度関係",
    mLabelGroup: "アドバイザーによる支援",
    isDisplay: true,
    requireSupport: true,
    type: "checkbox",
  },
  {
    name: "noukai_vocational_skill_development_promoter_consult",
    label: "相談",
    sLabelGroup: "職業能力開発推進者関係",
    mLabelGroup: "アドバイザーによる支援",
    isDisplay: true,
    requireSupport: true,
    type: "checkbox",
  },
  {
    name: "noukai_vocational_skill_development_promoter_inform",
    label: "情報",
    sLabelGroup: "職業能力開発推進者関係",
    mLabelGroup: "アドバイザーによる支援",
    isDisplay: true,
    requireSupport: true,
    type: "checkbox",
  },
  {
    name: "noukai_other_skill_development_consult",
    label: "相談",
    sLabelGroup: "その他（アドバイザー）",
    mLabelGroup: "アドバイザーによる支援",
    isDisplay: true,
    requireSupport: true,
    type: "checkbox",
  },
  {
    name: "noukai_other_skill_development_inform",
    label: "情報",
    sLabelGroup: "その他（アドバイザー）",
    mLabelGroup: "アドバイザーによる支援",
    isDisplay: true,
    requireSupport: true,
    type: "checkbox",
  },
  {
    name: "with_tool_utilization",
    label: "ツールの活用",
    isDisplay: true,
    requireSupport: true,
    type: "checkbox",
    sLabelGroup: "支援状況",
  },
  {
    name: "with_employment_consultant",
    label: "雇用管理コンサルタント",
    sLabelGroup: "専門家との同行",
    isDisplay: true,
    requireSupport: true,
    type: "checkbox",
  },
  {
    name: "with_health_counselor",
    label: "ヘルスカウンセラー",
    sLabelGroup: "専門家との同行",
    isDisplay: true,
    requireSupport: true,
    type: "checkbox",
  },
  {
    name: "with_training_coordinator",
    label: "研修コーディネート",
    sLabelGroup: "専門家との同行",
    isDisplay: true,
    requireSupport: true,
    type: "checkbox",
  },
  {
    name: "with_alone_on_hw",
    label: "単独",
    sLabelGroup: "労働局・ＨＷから情報を受けて実施した訪問",
    isDisplay: true,
    requireSupport: true,
    type: "checkbox",
  },
  {
    name: "with_staff_on_hw",
    label: "同行",
    sLabelGroup: "労働局・ＨＷから情報を受けて実施した訪問",
    isDisplay: true,
    requireSupport: true,
    type: "checkbox",
  },
  { name: "file", label: "ファイル", isDisplay: true, type: "file" },
].map((field) => ({
  ...field,
  groupId: field.sLabelGroup || field.groupId,
}));

export const AUXILIARY_FIELDS = [
  {
    name: "_jigyosyo_code",
    label: "事業所コード",
    isDisplay: true,
    type: "text",
  },
  {
    name: "_jigyosyo_custom_code",
    label: "独自コード",
    isDisplay: true,
    type: "text",
  },
  { name: "_company_name", label: "法人名", isDisplay: true, type: "text" },
  { name: "_jigyosyo_name", label: "事業所名", isDisplay: true, type: "text" },
  {
    name: "_service_type",
    label: "サービス種別",
    isDisplay: true,
    type: "text",
  },
  {
    name: "_jigyosyo_number_of_member",
    label: "職員数",
    isDisplay: true,
    type: "text",
  },
  {
    name: "_company_type",
    label: "開業日",
    isDisplay: true,
    type: "text",
  },
  {
    name: "_jigyosyo_postal_code",
    label: "事業所郵便番号",
    isDisplay: false,
    type: "text",
  },
  {
    name: "_jigyosyo_address",
    label: "住所",
    isDisplay: true,
    type: "text",
  },
  {
    name: "_jigyosyo_tel_number",
    label: "電話番号",
    isDisplay: true,
    type: "text",
  },
  {
    name: "_jigyosyo_fax_number",
    label: "ＦＡＸ番号",
    isDisplay: false,
    type: "text",
  },
  {
    name: "_jigyosyo_repr_name",
    label: "代表者名",
    isDisplay: true,
    type: "text",
  },
  {
    name: "_jigyosyo_repr_position",
    label: "事業所代表者役職",
    isDisplay: false,
    type: "text",
  },
  {
    name: "_jigyosyo_kourou_url",
    label: "厚生労働省ＵＲＬ",
    isDisplay: false,
    type: "text",
  },
  {
    name: "_jigyosyo_kourou_release_datetime",
    label: "事業所公労リリース日時",
    isDisplay: false,
    type: "text",
  },
  {
    name: "_jigyosyo_exists_koyou_sekininsha",
    label: "事業所に雇用責任者が存在するか",
    isDisplay: false,
  },

  {
    name: "_management_description",
    label: "選任状況",
    isDisplay: true,
    type: "text",
  },
  {
    name: "_management_is_sanjo",
    label: "賛助会員",
    isDisplay: true,
    type: "checkbox",
  },
]
  .map((field) => ({
    ...field,
    groupId: field.sLabelGroup || field.groupId,
  }))
  .filter((field) => field.isDisplay);
