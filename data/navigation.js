export const items = [{
        id: "btn_mainpage",
        title: "mainpage",
        icon: "mdi-home-outline",
        to: "/",
        claimName: "HomePageQuery"
    }, {
        title: "user_management",
        icon: "mdi-shield-account-outline",
        group: "user-management",
        children: [{
                title: "user_definitions",
                icon: "mdi-circle-medium",
                to: "definitions",
                claimName: "GetManagementUsersQuery"
            },
            {
                title: "user_claim_definitions",
                icon: "mdi-circle-medium",
                to: "claim-definitions",
                claimName: "GetUserClaimByUserIdQuery"
            },
            {
                title: "group_definitions",
                icon: "mdi-circle-medium",
                to: "group-definitions",
                claimName: ""
            },
            {
                title: "group_claim_definitions",
                icon: "mdi-circle-medium",
                to: "group-claim-definitions",
                claimName: ""
            }
        ]
    },
    {
        title: "business_partnership_management",
        icon: "mdi-store-outline",
        group: "business-partnership-management",
        children: [{
                title: "business_partner_definitions",
                icon: "mdi-circle-medium",
                to: "definitions",
                claimName: "GetMerchantsQuery"
            },
            {
                title: "business_partner_user_definitions",
                icon: "mdi-circle-medium",
                to: "user-definitions",
                claimName: "GetMerchantUsersByMerchantIdQuery"
            },
            {
                title: "business_partner_services_operations",
                icon: "mdi-circle-medium",
                to: "service-operations",
                claimName: "GetManagementUsersQuery"
            },
            {
                title: "business_partner_relationships",
                icon: "mdi-circle-medium",
                to: "business-partner-relationships",
                claimName: "GetManagementUsersQuery"
            },
            {
                title: "merchant_report",
                icon: "mdi-circle-medium",
                to: "report",
                claimName: ""
            },
            {
                title: "merchant_pricing_definitions",
                icon: "mdi-circle-medium",
                to: "pricing-definitions",
                claimName: "GetCustomerSegmentTransactionPricingsQuery"
            },
            {
                title: "document_operations",
                icon: "mdi-circle-medium",
                to: "document-operations",
                claimName: ""
            },
            {
                title: "quota_operations",
                icon: "mdi-circle-medium",
                to: "quota-operations",
                claimName: "GetMerchantFinancialQuotasQuery"
            },
            {
                title: "business_partner_bank_account_definitions",
                icon: "mdi-circle-medium",
                to: "bank-account-definitions",
                claimName: "GetMerchantBankAccountsByMerchantIdQuery"
            },
            {
                title: "business_partner_annulment_inquiries",
                icon: "mdi-circle-medium",
                to: "annulment-inquiries",
                claimName: "GetManagementUsersQuery"
            },

        ]
    },
    {
        title: "bank_management",
        icon: "mdi-bank-outline",
        group: "bank-management",
        children: [{
                title: "bank_list",
                icon: "mdi-circle-medium",
                to: "list",
                claimName: "GetBanksQuery"
            },
            {
                title: "withdrawal_quota_operations",
                icon: "mdi-circle-medium",
                to: "withdrawal-quota-operations",
                claimName: ""
            },
            {
                title: "bin_number_operations",
                icon: "mdi-circle-medium",
                to: "bin-number-operations",
                claimName: "GetBankIdentificationNumbersQuery"
            },
        ]
    },
    {
        title: "virtual_pos_management",
        icon: "mdi-credit-card-check-outline",
        group: "virtual-pos-management",
        children: [{
                title: "virtual_pos_definition",
                icon: "mdi-circle-medium",
                to: "definition",
                claimName: "CreateVirtualPointOfSaleCommand"
            },
            {
                title: "virtual_pos_bank_installment_commission_definition",
                icon: "mdi-circle-medium",
                to: "bank-installment-commission-definition",
                claimName: "GetPaymentInstallmentsQuery"
            },
            {
                title: "virtual_pos_merchant_installment_commission_definition",
                icon: "mdi-circle-medium",
                to: "merchant-installment-commission-definition",
                claimName: "GetVirtualPointOfSaleCustomerCommissionsQuery"
            },
            {
                title: "virtual_pos_installment_routing_definition",
                icon: "mdi-circle-medium",
                to: "installment-routing-definition",
                claimName: "GetPaymentInstallmentRoutingsQuery"
            },
            {
                isDivider: true,
                onlyAdmin: false
            },
            {
                title: "virtual_pos_list",
                icon: "mdi-circle-medium",
                to: "list",
                claimName: "GetVirtualPointOfSalesQuery"
            },
            {
                title: "virtual_pos_payments",
                icon: "mdi-circle-medium",
                to: "virtual-pos-payments",
                claimName: "GetPaymentsQuery"
            },
            {
                title: "cancellation_approval_operations",
                icon: "mdi-circle-medium",
                to: "cancellation-approval-operations",
                claimName: "PaymentCancelTransactionsQuery"
            },
            {
                title: "refund_approval_operations",
                icon: "mdi-circle-medium",
                to: "refund-approval-operations",
                claimName: "PaymentRefundTransactionsQuery"
            },
            {
                title: "fraud_chargeback_operations",
                icon: "mdi-circle-medium",
                to: "fraud-chargeback-operations",
                claimName: ""
            },
            {
                title: "collection_approval_operations",
                icon: "mdi-circle-medium",
                to: "collection-approval-operations",
                claimName: ""
            },
            {
                title: "error_message_operations",
                icon: "mdi-circle-medium",
                to: "error-message-operations",
                claimName: "GetManagementUsersQuery"
            },

        ]
    },
    {
        title: "money_transfer_management",
        icon: "mdi-finance",
        group: "money-transfer-management",
        children: [{
            title: "money_transfer_operations",
            icon: "mdi-circle-medium",
            to: "operations",
            claimName: ""
        }, ]
    },
    {
        title: "wallet_management",
        icon: "mdi-wallet",
        group: "wallet-management",
        children: [{
                title: "candidate_approval_operations",
                icon: "mdi-circle-medium",
                to: "candidate-approval-operations",
                claimName: "GetManagementUsersQuery"
            },
            {
                title: "wallet_users_information",
                icon: "mdi-circle-medium",
                to: "wallet-users-information",
                claimName: "GetManagementUsersQuery"
            },
            {
                title: "wallet_users_information_update",
                icon: "mdi-circle-medium",
                to: "wallet-users-information-update",
                claimName: "GetManagementUsersQuery"
            },
            {
                title: "wallet_users_documents",
                icon: "mdi-circle-medium",
                to: "wallet-users-documents",
                claimName: "GetManagementUsersQuery"
            },
            {
                title: "wallet_segment_definitions",
                icon: "mdi-circle-medium",
                to: "segment-definitions",
                claimName: "GetManagementUsersQuery"
            },
            {
                title: "wallet_transaction_limit_definitions",
                icon: "mdi-circle-medium",
                to: "transaction-limit-definitions",
                claimName: "GetManagementUsersQuery"
            },
            {
                title: "wallet_users_bank_accounts",
                icon: "mdi-circle-medium",
                to: "wallet-users-bank-accounts",
                claimName: "GetManagementUsersQuery"
            },
            {
                title: "load_money_operations",
                icon: "mdi-circle-medium",
                to: "load-money-operations",
                claimName: "GetManagementUsersQuery"
            },
            {
                title: "send_money_operations",
                icon: "mdi-circle-medium",
                to: "send-money-operations",
                claimName: "GetManagementUsersQuery"
            },
            {
                title: "wallet_money_transfer_operations",
                icon: "mdi-circle-medium",
                to: "wallet-money-transfer-operations",
                claimName: "GetManagementUsersQuery"
            },
            {
                title: "appeal_cancellation_refund_operations",
                icon: "mdi-circle-medium",
                to: "appeal-cancellation-refund-operations",
                claimName: "GetManagementUsersQuery"
            },
            {
                title: "wallet_users_statement_operations",
                icon: "mdi-circle-medium",
                to: "wallet-users-statement-operations",
                claimName: "GetManagementUsersQuery"
            },
            {
                title: "wallet_agreement_operations",
                icon: "mdi-circle-medium",
                to: "wallet-agreement-operations",
                claimName: "GetManagementUsersQuery"
            },
            {
                title: "wallet_gift_card_operations",
                icon: "mdi-circle-medium",
                to: "wallet-gift-card-operations",
                claimName: "GetManagementUsersQuery"
            },
            {
                title: "wallet_ask_money_operations",
                icon: "mdi-circle-medium",
                to: "wallet-ask-money-operations",
                claimName: "GetManagementUsersQuery"
            },
            {
                title: "wallet_physical_card_operations",
                icon: "mdi-circle-medium",
                to: "wallet-physical-card-operations",
                claimName: "GetManagementUsersQuery"
            },
            {
                title: "wallet_virtual_card_operations",
                icon: "mdi-circle-medium",
                to: "wallet-virtual-card-operations",
                claimName: "GetManagementUsersQuery"
            },
            {
                title: "wallet_users_automatic_payment_order",
                icon: "mdi-circle-medium",
                to: "wallet-users-automatic-payment-order",
                claimName: "GetManagementUsersQuery"
            },
            {
                title: "wallet_users_permissions",
                icon: "mdi-circle-medium",
                to: "wallet-users-permissions",
                claimName: "GetManagementUsersQuery"
            },
        ]
    },
    {
        title: "earnings_resource_management",
        icon: "mdi-face-agent",
        group: "earnings-resource-management",
        children: [{
                title: "pay_with_wallet_commission_definitions",
                icon: "mdi-circle-medium",
                to: "pay-with-wallet-commission-definitions",
                claimName: "GetManagementUsersQuery"
            },
            {
                title: "wallet_transaction_commission_definitions",
                icon: "mdi-circle-medium",
                to: "wallet-transaction-commission-definitions",
                claimName: "GetManagementUsersQuery"
            },
            {
                title: "business_partner_general_commission_definitions",
                icon: "mdi-circle-medium",
                to: "business-partner-general-commission-definitions",
                claimName: "GetManagementUsersQuery"
            },
        ],
    },

    {
        title: "suspicious_transaction_management",
        icon: "mdi-face-agent",
        group: "suspicious-transaction-management",
        children: [{
                title: "black_list_operations",
                icon: "mdi-circle-medium",
                to: "black-list-operations",
                claimName: ""
            },
            {
                title: "suspicious_transaction_analysis",
                icon: "mdi-circle-medium",
                to: "suspicious-transaction-analysis",
                claimName: ""
            },
            {
                title: "suspicious_transaction_scenarios",
                icon: "mdi-circle-medium",
                to: "scenarios",
                claimName: ""
            },
            {
                title: "suspicious_transaction_scenario_approval_operations",
                icon: "mdi-circle-medium",
                to: "scenario-approval-operations",
                claimName: ""
            },
        ]
    },
    {
        title: "money_transfer_approval_operations",
        icon: "mdi-transfer",
        group: "money-transfer-approval-operations",
        children: [{
            title: "money_transfer_approval_operations",
            icon: "mdi-circle-medium",
            to: "money-transfer-approval-operations",
            claimName: ""
        }]
    },
    {
        title: "system_management",
        icon: "mdi-wrench-outline",
        group: "system-management",
        children: [{
                title: "segment_definitions",
                icon: "mdi-circle-medium",
                to: "segment-definitions",
                claimName: "GetCustomerSegmentsQuery"
            },
            {
                title: "customer_service_department_definitions",
                icon: "mdi-circle-medium",
                to: "customer-services-department-definitions",
                claimName: ""
            },
            {
                title: "currency_definitions",
                icon: "mdi-circle-medium",
                to: "currency-definitions",
                claimName: "GetCurrenciesQuery"
            },
            {
                title: "authorized_ip_definitions",
                icon: "mdi-circle-medium",
                to: "ip-definitions",
                claimName: ""
            },
            {
                title: "legal_entity_definitions",
                icon: "mdi-circle-medium",
                to: "legal-entity-definitions",
                claimName: ""
            },
            {
                title: "country_definitions",
                icon: "mdi-circle-medium",
                to: "country-definitions",
                claimName: "GetCountriesQuery"
            },
            {
                title: "state_definitions",
                icon: "mdi-circle-medium",
                to: "state-definitions",
                claimName: "GetStatesQuery"
            },
            {
                title: "city_definitions",
                icon: "mdi-circle-medium",
                to: "city-definitions",
                claimName: "GetCitiesQuery"
            },
            {
                title: "bills_collection_commission_definitions",
                icon: "mdi-circle-medium",
                to: "bills-collection-commission-definitions",
                claimName: ""
            },
            {
                title: "money_transfer_commission_definitions",
                icon: "mdi-circle-medium",
                to: "money-transfer-commission-definitions",
                claimName: ""
            },
            {
                title: "location_group_definitions",
                icon: "mdi-circle-medium",
                to: "location-group-definitions",
                claimName: "GetLocationGroupsQuery"
            },
            {
                title: "ticket_support_requests",
                icon: "mdi-circle-medium",
                to: "ticket-support-definitions",
                claimName: ""
            },
            {
                title: "mcc_definitions",
                icon: "mdi-circle-medium",
                to: "mcc-definitions",
                claimName: "GetMerchantCategoryCodesQuery"
            },
        ]
    },
    {
        title: "approval_operations",
        icon: "mdi-check-decagram-outline",
        group: "approval-operations",
        children: [{
                title: "user_definitions",
                icon: "mdi-circle-medium",
                to: "management-user-definitions",
                claimName: "UpdateApprovalStatusManagementUserCommand"
            },
            {
                title: "user_claim_definitions",
                icon: "mdi-circle-medium",
                to: "user-claim-definitions",
                claimName: "UpdateApprovalStatusUserClaimCommand"
            },
            {
                isDivider: true,
            }, {
                title: "merchant_money_transfer_approval_operations",
                icon: "mdi-circle-medium",
                to: "merchant-money-transfer-operations",
                claimName: ""
            }, {
                title: "merchant_definitions",
                icon: "mdi-circle-medium",
                to: "merchant-definitions",
                claimName: "UpdateApprovalStatusMerchantCommand"
            }, {
                title: "merchant_document_definitions",
                icon: "mdi-circle-medium",
                to: "merchant-document-definitions",
                claimName: "UpdateApprovalStatusMerchantDocumentCommand"
            }, {
                title: "merchant_pricing_definitions",
                icon: "mdi-circle-medium",
                to: "merchant-pricing-definitions",
                claimName: ""
            }, {
                title: "merchant_quota_definitions",
                icon: "mdi-circle-medium",
                to: "merchant-quota-definitions",
                claimName: "UpdateApprovalStatusMerchantFinancialQuotaCommand"
            },
            {
                title: "merchant_bank_account_definitions",
                icon: "mdi-circle-medium",
                to: "merchant-bank-account-definitions",
                claimName: "UpdateApprovalStatusMerchantBankAccountCommand"
            }, {
                title: "pay_with_wallet_commission_definitions",
                icon: "mdi-circle-medium",
                to: "pay-with-wallet-commission-definitions",

                claimName: ""
            }, {
                isDivider: true,
            }, {
                title: "bank_error_code_definitons",
                icon: "mdi-circle-medium",
                to: "bank-error-message-definitions",
                claimName: ""
            }, {
                title: "bank_bin_numbers_definitions",
                icon: "mdi-circle-medium",
                to: "bank-bin-number-definitions",
                claimName: ""
            }, {
                isDivider: true,
            }, {
                title: "virtual_pos_bank_installment_commission_definitions",
                icon: "mdi-circle-medium",
                to: "bank-installment-commission-definitions",
                claimName: "UpdateApprovalStatusPaymentInstallmentCommand"
            }, {
                title: "virtual_pos_merchant_installment_commission_definitions",
                icon: "mdi-circle-medium",
                to: "merchant-installment-commission-definitions",
                claimName: "UpdateApprovalStatusVirtualPointOfSaleCustomerCommissionCommand"
            }, {
                isDivider: true,
            },
            {
                title: "black_list_operations",
                icon: "mdi-circle-medium",
                to: "black-list-operations",

                claimName: ""
            }, {
                isDivider: true,
            }, {
                title: "system_ip_definitions",
                icon: "mdi-circle-medium",
                to: "ip-definitions",
                claimName: ""
            },
        ]
    },
    {
        title: "quick_operations",
        icon: "mdi-clock-fast",
        group: "system",
        children: [{
                title: "rate_change",
                icon: "mdi-circle-medium",
                to: "/",
                claimName: ""
            },
            {
                title: "product_replacement",
                icon: "mdi-circle-medium",
                to: "/",
                claimName: ""
            },
            {
                title: "changing_quota",
                icon: "mdi-circle-medium",
                to: "/",
                claimName: ""
            },
        ]
    },
    {
        title: "information",
        icon: "mdi-bell-outline",
        group: "system",
        children: [{
                title: "sending_sms",
                icon: "mdi-circle-medium",
                to: "/",
                claimName: ""
            },
            {
                title: "sending_mail",
                icon: "mdi-circle-medium",
                to: "/",
                claimName: ""
            },
            {
                title: "sending_notification",
                icon: "mdi-circle-medium",
                to: "/",
                claimName: ""
            },
        ]
    },
    {
        title: "reports",
        icon: "mdi-file-chart",
        group: "reports",
        children: [{
            title: "virtual_pos_operation_report",
            icon: "mdi-circle-medium",
            to: "virtual-pos-transaction-report",
            claimName: "GetManagementUsersQuery"
        }, {
            title: "financial_report",
            icon: "mdi-circle-medium",
            to: "financial-report",
            claimName: "GetManagementUsersQuery"
        }, {
            title: "summary_operation_report",
            icon: "mdi-circle-medium",
            to: "summary-transaction-report",
            claimName: "GetManagementUsersQuery"
        }, ]
    },

];